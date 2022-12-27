<script context="module">
  export async function load({ fetch }) {
    const url = `http://localhost:3000/api/posts`;
    const response = await fetch(url);
    const posts = await response.json();

    if (response.ok) {
      return {
        status: 200,
        props: {
          posts,
        },
      };
    }

    return {
      status: response.status,
      error: new Error("Couldn not fetch posts"),
    };
  }
</script>

<script>
  import PostsPanel from "$lib/Admin/Posts/PostsPanel.svelte";
  export let posts = [];

  const handleAddToGrid = (event) => {
    const postData = event.detail;

    posts = [...posts, postData];
  };
</script>

<svelte:head>
  <title>Posts panel</title>
</svelte:head>

<PostsPanel bind:posts on:addToGrid={handleAddToGrid} />

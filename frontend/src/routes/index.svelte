<script context="module">
  export async function load({ params, fetch }) {
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
      error: new Error("Couldn not fetch the posts"),
    };
  }
</script>

<script>
  import PostGrid from "$lib/Post/PostGrid.svelte";
  import Header from "$lib/UI/Header.svelte";

  export let posts;
</script>

<div class="home__page">
  <Header />
  <PostGrid {posts} />
</div>

<style lang="scss">
  .home__page {
    padding: 0 10vh;
    background-color: #111;
  }
</style>

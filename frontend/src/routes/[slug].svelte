<script context="module">
  import Description from "./../lib/PostPage/Description.svelte";
  export async function load({ params, fetch }) {
    const url = `http://localhost:3000/api/posts/title/${params.slug}`;
    const response = await fetch(url);
    const post = await response.json();
    if (response.ok) {
      return {
        status: 200,
        props: {
          post,
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
  import Header from "$lib/PostPage/Header.svelte";
  export let post;

  function readingTime() {
    const wpm = 225;
    const words = post.description.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);

    return time;
  }

  const time = readingTime();
  console.log(time);
</script>

<svelte:head>
  <title>
    {post.title}
  </title>
</svelte:head>

<div class="single__post_wrapper">
  <Header {...post} {time} />
  <Description description={post.description} />
</div>

<style lang="scss">
  .single__post_wrapper {
    width: 100%;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #111111;
    a {
      color: wheat;
    }
  }
</style>

<script>
  import PostGrid from "$lib/Post/PostGrid.svelte";
  import Header from "$lib/UI/Header.svelte";

  export let data = {};
  let posts = data.posts;
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

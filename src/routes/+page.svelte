<script>
  import PostGrid from "$lib/Post/PostGrid.svelte";

  export let data = {};
  let posts = data.posts;
</script>

<div class="home__page">
  <PostGrid {posts} />
</div>

<style lang="scss">
  @import "../scss/media_queries";
  .home__page {
    padding: 0 10vh;
    background-color: #111;
    @include phone {
      padding: 0 5vh;
    }
  }
</style>

<script>
  export let description = "";
</script>

<div class="ql-editor">
  {@html description}
</div>

<style lang="scss">
  img {
    width: 300px;
  }
  @import "../../scss/media_queries";
  .ql-editor {
    margin: 2vh 0;
    font-size: 15px;
    width: 60%;

    @include phone {
      width: 100%;
      padding: 0 4rem;
    }
  }
  @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";
</style>

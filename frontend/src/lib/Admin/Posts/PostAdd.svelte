<script>
  import { GET } from "$lib/Helpers/Requests";
  import { onMount } from "svelte";

  import PostForm from "./PostForm.svelte";

  let showForm = false;
  let categories = [];

  const toggleForm = () => {
    showForm = !showForm;
  };

  const getCategories = async () => {
    const url = `http://localhost:3000/api/categories/`;

    const res = await GET(url);

    const fetchedCategories = await res.json();

    if (res.ok) {
      categories = fetchedCategories;

      return {
        status: 200,
        props: {
          fetchedCategories,
        },
      };
    }

    return {
      status: res.status,
      error: new Error("Couldn not fetch the posts"),
    };
  };

  onMount(() => {
    getCategories();
  });
</script>

<div class="posts__add" on:click={toggleForm}>+</div>

{#if showForm}
  <PostForm bind:showForm on:addToGrid {categories} />
{/if}

<style lang="scss">
  .posts__add {
    margin: 2vh 0;
    cursor: pointer;
    i {
      color: white;
      font-size: 4rem;
    }
  }
</style>

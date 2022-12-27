<script context="module">
  export async function load({ fetch }) {
    const url = `http://localhost:3000/api/categories`;
    const response = await fetch(url);
    const categories = await response.json();

    if (response.ok) {
      return {
        status: 200,
        props: {
          categories,
        },
      };
    }

    return {
      status: response.status,
      error: new Error("Couldn not fetch categories"),
    };
  }
</script>

<script>
  import CategoriesPanel from "$lib/Admin/Categories/CategoriesPanel.svelte";

  export let categories = [];

  const handleAddToGrid = (event) => {
    const categoryData = event.detail;
    categories = [...categories, categoryData];
  };
</script>

<svelte:head>
  <title>Categories panel</title>
</svelte:head>

<CategoriesPanel bind:categories on:addToGrid={handleAddToGrid} />

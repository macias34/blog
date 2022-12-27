<script context="module">
  import ImagesPanel from "$lib/Admin/Images/ImagesPanel.svelte";
  export async function load({ fetch }) {
    const url = `http://localhost:3000/api/imgs`;
    const response = await fetch(url);
    const imgs = await response.json();

    if (response.ok) {
      return {
        status: 200,
        props: {
          imgs,
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
  export let imgs = [];
</script>

<svelte:head>
  <title>Images Panel</title>
</svelte:head>

<ImagesPanel bind:imgs />

<script>
  import { token } from "$lib/stores.js";
  import { goto } from "$app/navigation";
  import AdminNav from "$lib/Admin/UI/AdminNav.svelte";
  import { browser } from "$app/env";

  let isAuthenticated = false;

  const jwt = $token;

  $: {
    if (jwt == "null" || !jwt) {
      if (browser) goto("/auth");
    } else if (jwt) {
      isAuthenticated = $token;
    }
  }
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/fe735f6a5b.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

{#if isAuthenticated}
  <div class="admin__wrapper">
    <AdminNav />
    <slot />
  </div>
{:else}
  Unauthorized
{/if}

<style global lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;800&display=swap");
  @import url("https://rsms.me/inter/inter.css");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  html {
    font-size: 10px;
  }
  .admin__wrapper {
    width: 100%;
    display: flex;
    padding-right: 10vh;
    background-color: #3c3c3c;
  }
</style>

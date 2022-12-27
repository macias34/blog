<script>
  export let placeholder = "";
  export let value = "";
  export let type = "text";
</script>

{#if type === "text"}
  <input type="text" {placeholder} bind:value />
{:else if type === "password"}
  <input type="password" {placeholder} bind:value />
{/if}

<style lang="scss">
  input {
    margin: 2vh 0;
    height: 5vh;
    width: 20vw;
    text-align: center;
  }
</style>

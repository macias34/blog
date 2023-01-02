<script>
  import { isFormEmpty } from "$lib/Helpers/formValidation";
  import { createEventDispatcher } from "svelte";
  import Input from "$lib/Auth/Input.svelte";
  import Button from "$lib/UI/Button.svelte";
  import Popup from "$lib/UI/Popup.svelte";
  import { POST } from "$lib/Helpers/Requests";

  const dispatch = createEventDispatcher();

  let showPopup = false;
  let username = "";
  let password = "";

  const submitForm = async () => {
    const formFields = [username, password];

    if (isFormEmpty(formFields)) {
      showPopup = true;
      return;
    }

    const credientals = {
      username,
      password,
    };

    const url = "/api/auth/login";

    const res = await POST(url, credientals);
    const tokens = await res.json();
    localStorage.setItem("token", JSON.stringify(tokens.accessToken));

    username = "";
    password = "";
  };
</script>

<h1>Log in</h1>
<form on:submit|preventDefault={submitForm}>
  <Input placeholder="Username" bind:value={username} />
  <Input placeholder="Password" bind:value={password} />
  <Button type={"submit"}>Log in</Button>
</form>

<Popup
  bind:showPopup
  title="Nie wypełniłeś wszystkich pól."
  message="Spróbuj ponownie ..."
/>

<style lang="scss">
  form {
    margin-top: 3vh;
    padding: 5vh;
    border-radius: 30px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
  }
</style>

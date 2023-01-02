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

    const url = "/api/auth/register";

    const res = await POST(url, credientals);
    console.log(await res.json());

    dispatch("submitForm");

    username = "";
    password = "";
  };
</script>

<h1>Sign up</h1>
<form on:submit|preventDefault={submitForm}>
  <Input placeholder="Username" bind:value={username} />
  <Input placeholder="Password" bind:value={password} />
  <Button type={"submit"}>Sign up</Button>
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

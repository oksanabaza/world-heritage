<script>
    import { push } from "svelte-spa-router";
    import { getContext } from "svelte";

    let email = "";
    let password = "";
    let errorMessage = "";
    const countryspotService = getContext("CountryspotService");

    async function login() {
        let success = await countryspotService.login(email, password)
        if (success) {
            push("/dashboard") 
        } else {
            email = "";
            password = "";
            errorMessage = "Invalid Credentials";
        }
    }
</script>
<div class='box custom-box'>
<form on:submit|preventDefault={login}>
    <section class="section">
        <h1 class="title">Log in</h1>
            <div class="field">
                <label class="label" for="email">Email</label> 
                <input bind:value={email} class="input" id="email" type="text" placeholder="Enter email" name="email">
            </div>
            <div class="field">
                <label class="label" for="password">Password</label> 
                <input bind:value={password} class="input" id="password" type="password" placeholder="Enter Password" name="password">
            </div>
            <div class="field is-grouped">
                <button class="button colored-btn">Log In</button>
            </div>   
    </section>
</form>
</div>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
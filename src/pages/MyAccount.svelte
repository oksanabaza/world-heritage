<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import { getContext, onMount, createEventDispatcher} from "svelte";
    import { push } from "svelte-spa-router";
    
    const countryspotService = getContext("CountryspotService")
    const dispatch = createEventDispatcher();
    export let user = {};
    let userInfo = {};

    onMount(async () => { 
        user = await countryspotService.getLoggedInUser();
        userInfo = user.data;
    });

    async function updateUserDetails() {
      const success = await countryspotService.updateUserDetails(userInfo._id, userInfo);
      if (success) {
        dispatch("message", {user: userInfo})
        push("/login");
      }
    }

    async function deleteUser() {
      const success = await countryspotService.deleteUser(userInfo._id);
      if(success) {
        dispatch("message")
        push("/")
      }
    }
</script>

<MainNavigator/>
<section class="section box">
<form on:submit|preventDefault={updateUserDetails}>
  <h1 class="title">Your Account Details</h1>
  <!-- <h3 class = "subtitle">Update Your Details</h3> -->
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label for="firstName" class="label">First Name</label>
        <input bind:value={userInfo.firstName} class="input" type="text" name="firstName">
      </div>
      <div class="field">
        <label for="lastName" class="label">Last Name</label>
        <input bind:value={userInfo.lastName} class="input" type="text" name="lastName">
      </div>
    </div>
  </div>
      <div class="field">
        <label for="email" class="label">Email</label> 
        <input class="input" type="text" name="email" bind:value={userInfo.email}>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label> 
        <input class="input" type="password" name="password" placeholder="Enter new password">
      </div>
      <div class="field">
        <button class="button colored-btn">Submit</button>
      </div>
</form>
    <!-- <div>
      <h2> Delete Your Account</h2>
      <button on:click={deleteUser} class="button">
      <span class="icon-is-small">
      <i class="fas fa-trash"></i>
      </span>
    </div> -->
</section>
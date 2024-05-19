<script>
    import { createEventDispatcher, getContext } from "svelte";
    import sanitizeHtml from "sanitize-html";

    let title = "";
    let errorMessage = "";
    const countryspotService = getContext("CountryspotService");
    const dispatch = createEventDispatcher();

    async function addCountry() {  
            const newCountry = {
                title: sanitizeHtml(title), 
            };
            const success = await countryspotService.addCountry(newCountry)
            if(success) {
                dispatch("message", {country: newCountry})
                title = "";
            }
    };
</script>

<form on:submit|preventDefault={addCountry}>
    <div class="">
      <label for="title" class="label">Country Name</label>
      <input bind:value={title} id="title" class="input" type="text" placeholder="Enter country name" name="title" />
    </div>
    <button class="button is-link">Add Country</button>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
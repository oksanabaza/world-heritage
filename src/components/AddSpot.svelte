<script>
// @ts-nocheck

  import { createEventDispatcher, getContext } from "svelte";
  import sanitizeHtml from "sanitize-html";

  let placeName = "";
  let lat = "";
  let lng = "";
  let description = "";
  let category = "";
  let errorMessage = "";
  export let countryId;
  const countryspotService = getContext("CountryspotService");
  const dispatch = createEventDispatcher();

  async function addSpot() {
    const newSpot = {
        countryid: sanitizeHtml(countryId),
        placeName: sanitizeHtml(placeName),
        lat: sanitizeHtml(lat),
        lng: sanitizeHtml(lng),
        description: sanitizeHtml(description),
        category: sanitizeHtml(category),
    };
    const success = await countryspotService.addSpot(newSpot.countryid,newSpot)
    if (success) {
        dispatch("message", {spot: newSpot})
        placeName = "";
        lat = "";
        lng = "";
        description = "";
        category = "";
    }
}
</script>
<form on:submit|preventDefault={addSpot} class='box form-width'>
  <label for="title" class="label">Enter Spot Details:</label>

  <div class="field">
    <div class="columns">
      <div class="column">
        <label for="placeName" class="label">Place Name</label>
        <input bind:value={placeName} class="input" type="text" maxlength="20" placeholder="Enter Place Name" name="placeName" />
      </div>
      <div class="column">
        <label for="category" class="label">Category</label>
        <div class="control">
          <div class="select is-primary">
            <select bind:value={category} name="category" id="category">
              <option>Choose Category</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="field">
    <div class="columns">
      <div class="column">
        <label for="lat" class="label">Latitude</label>
        <input bind:value={lat} class="input" type="number" step="0.0000001" min="-90.0000000" max="90.0000000" placeholder="Enter Latitude" name="lat" />
      </div>
      <div class="column">
        <label for="lng" class="label">Longitude</label>
        <input bind:value={lng} class="input" type="number" step="0.0000001" min="-180.0000000" max="180.0000000" placeholder="Enter Longitude" name="lng" />
      </div>
    </div>
  </div>

  <div class="field">
    <label for="description" class="label">Description</label>
    <div class="control">
      <textarea bind:value={description} class="textarea is-input has-fixed-size" placeholder="Description" maxlength="280" name="description"></textarea>
    </div>
  </div>

  <button class="button colored-btn">Add Spot</button>
</form>
<!-- <form on:submit|preventDefault={addSpot} class='box'>
    <label for="title" class="label">Enter Spot Details:</label>
    <div class="field">
      <div class="">
        <div class="field">
          <label for="placeName" class="label">Place Name</label>
          <input bind:value={placeName} class="input" type="text" maxlength="20" placeholder="Enter Place Name" name="placeName" />
        </div>
        <div class="field">
          <label for="lat" class="label">Latitude</label>
          <input bind:value={lat} class="input" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" placeholder="Enter Latitude" name="lat" />
        </div>
        <div class="field">
          <label for="lng" class="label">Longitude</label>
          <input bind:value={lng} class="input" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" placeholder="Enter Longitude" name="lng" />
        </div>
        <div class="field">
          <label for="description" class="label">Description</label>
          <div class="control">
            <textarea bind:value={description} class="textarea is-input has-fixed-size" placeholder="Description" type="text" maxlength="280" pattern="[A-Za-z\\s]+{20}" name="description"></textarea>
          </div>
        </div>
        <div class="field">
          <label for="category" class="label">Category</label>
          <div class="control">
            <div class="select is primary">
              <select bind:value={category} name="category" id="category">
                <option>Choose Category</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button colored-btn">Add Spot</button>
</form> -->
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}    
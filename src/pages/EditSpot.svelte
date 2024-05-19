<script>
// @ts-nocheck

    import MainNavigator from "../components/MainNavigator.svelte";
    import { createEventDispatcher, getContext, onDestroy, onMount } from "svelte";
    import { push, pop } from "svelte-spa-router";

    let spot = {};
    let errorMessage = "";
    export let params;
    const countryspotService = getContext("CountryspotService");
    const dispatch = createEventDispatcher();
    
    onMount(async () => {
        spot = await countryspotService.getSpotById(params.spotid);
    });

    async function updateSpot() {
        const success = await countryspotService.updateSpot(params.countryid, params.spotid, spot) 
        if (success) {
            dispatch("message", {spot: spot})
            pop();
          }
        }
    
</script>

<MainNavigator />
<div class="form-container">
<form on:submit|preventDefault={updateSpot} class='box'>
        <label for="title" class="label">Enter Updated Spot Details:</label>
        <div class="field is-vertical">
          <div class="">
            <div class="field">
              <label for="placeName" class="label">Place Name</label>
              <input bind:value={spot.placeName} class="input" type="text" name="placeName" />
            </div>
            <div class="field">
              <label for="lat" class="label">Latitude</label>
              <input bind:value={spot.lat} class="input" type="number" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" name="lat"/>
            </div>
            <div class="field">
              <label for="lng" class="label">Longitude</label>
              <input bind:value={spot.lng} class="input" type="number" step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" name="lng"/>
            </div>
            <div class="field">
              <label for="description" class="label">Description</label>
              <div class="control">
                <textarea bind:value={spot.description} class="textarea is-input has-fixed-size" type="text" maxlength="280" name="description"></textarea>
              </div>
            </div>
            <div class="field">
              <label for="category" class="label">Category</label>
              <div class="control">
                <div class="select is primary">
                  <select name="category" id="category">
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
        <button class="button is-link">Update Spot</button>
      </form>
      </div>
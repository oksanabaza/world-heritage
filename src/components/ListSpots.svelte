<script>
import { getContext, onMount, createEventDispatcher } from "svelte";

const countryspotService = getContext("CountryspotService");
const dispatch = createEventDispatcher();
let spotList = [];
export let countryId;

onMount(async () => {
    spotList = await countryspotService.getSpotsByCountryId(countryId);
  });

export async function refreshSpotList() {
        spotList = await countryspotService.getSpotsByCountryId(countryId);
    }

async function deleteSpot(spotid) {
  const success = await countryspotService.deleteSpot(spotid);
  if(success) {
    dispatch("message")
  }
}

</script>

<table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Place Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Description</th>
        <th>Category</th>
        <th>View Spot Details</th>
        <th>Edit Spot</th>
        <th>Delete Spot</th>
      </tr>
    </thead>
    <tbody>
      {#each spotList as spot}
        <tr>
          <td>
            {spot.placeName}
          </td>
          <td>
            {spot.lat}
          </td>
          <td>
              {spot.lng}
          </td>
          <td>
            {spot.description}
          </td>
          <td>
            {spot.category}
          </td>
          <td>
            <a href="#/spot/{spot._id}" class="button">
            <span class="icon is-small">
              <i class="fas fa-folder-open"></i>
            </span>
            </a>
          </td>
          <td>
             <a href="#/country/{spot.countryid}/spot/{spot._id}" class="button">
                <i class="fas fa-pen"></i> 
              </a>
          </td>
          <td>
            <button on:click={() => { deleteSpot(spot._id) }} class="button">
              <i class="fas fa-trash"></i> 
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
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
<div class="columns is-multiline is-gap is-mobile">
  {#each spotList as spot}
  <div class="column is-half">
    <div class="card grid-item">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={spot.images[0].img} alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content" style="height: 600px; overflow: hidden;">
        <div class="media">
          <div class="media-content">
            <p class="title"> {spot.placeName}</p>
            <p class="subtitle">{spot.category}</p>
          </div>
        </div>
        <div class="content">
          {spot.description}
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <button on:click={() => { deleteSpot(spot._id) }} class="button">
            <i class="fas fa-trash"></i> 
          </button>
        </p>
        <p class="card-footer-item">
          <a href="#/country/{spot.countryid}/spot/{spot._id}" class="button">
            <i class="fas fa-pen"></i> 
          </a>
        </p>
        <p class="card-footer-item">
          <a target="_blank" class="button" href="https://www.google.com/maps/place/51%C2%B046'19.0%22N+10%C2%B032'19.0%22W">    
            <i class="fas fa-map-pin"></i>
          </a>
        </p>
      </footer>
    </div>
  </div>
  {/each}
</div>
<!-- <table class="table is-fullwidth is-striped">
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
  </table> -->
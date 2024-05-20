<script>
    import { onMount, getContext } from "svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import SpotGallery from "../components/SpotGallery.svelte";

    let spot = {};
    export let params;
    const countryspotService = getContext("CountryspotService");

    onMount(async () => {
        spot = await countryspotService.getSpotById(params.spotid);
    })

    async function refreshSpot() {
        spot = await countryspotService.getSpotById(params.spotid);
    }

</script>

<MainNavigator/>
<div class='box colored-background'>
<section class="section columns is-vcentered">
    <div class="column ">
        <div class="title">{spot.placeName}</div>
<div class="box">
<table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Place Name</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Description</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
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
        </tr>
    </tbody>
  </table>
</div>
</div>
</section>

<SpotGallery spotid={spot._id} images={spot.images} on:message={refreshSpot}/>
</div>



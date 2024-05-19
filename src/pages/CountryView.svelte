<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListSpots from "../components/ListSpots.svelte";
    import AddSpot from "../components/AddSpot.svelte";
    import MySpotMap from "../components/MySpotMap.svelte";
    
    export let params;
    let listSpotComponent = undefined;
    let spotMap = null;

    async function spotAdded(event) {
      spotMap.addSpotMarker(event.detail.spot);
      await listSpotComponent.refreshSpotList();
    }
 
    async function updateList(event) {
      await listSpotComponent.refreshSpotList();
    }
 
</script>

<MainNavigator/>
<section class="section columns is vcentered box">
    <div class="column has-text-centered">
      <div class="title">
        Your Spot List
      </div>
      <ListSpots on:message={updateList} bind:this={listSpotComponent} countryId={params.id} />
      <AddSpot on:message={spotAdded} countryId={params.id} />
    </div>
</section>
  <div class="title"> Spot Map
    <MySpotMap on:message={spotAdded} bind:this={spotMap} countryId={params.id}/>
  </div>
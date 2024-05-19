<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import ListCountry from "../components/ListCountry.svelte";
    import AddCountry from "../components/AddCountry.svelte";
    
    let listCountryComponent = undefined;

    async function countryAdded(e) {
      console.log(listCountryComponent);
      console.log(e);
      await listCountryComponent.refreshCountryList();
    }

</script>

<MainNavigator />

<section class="section">
  <div class="box country-box">
  <ListCountry bind:this={listCountryComponent}/>
  <AddCountry on:message={countryAdded}/>
</div>
</section>


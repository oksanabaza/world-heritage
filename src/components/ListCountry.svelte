<script>
    import {getContext, onMount} from "svelte";
    import Country from "./Country.svelte";

    const countryspotService = getContext("CountryspotService");
    let countryList = [];

    onMount(async () => {
        countryList = await countryspotService.getUserCountries();
    });

    export async function refreshCountryList() {
        countryList = await countryspotService.getUserCountries();
    }
</script>

{#each countryList as country }
  <Country countryid={country._id} title={country.title} on:message={refreshCountryList} />
{/each}
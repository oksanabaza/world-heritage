<script>
import { getContext, onMount } from "svelte";

const countryspotService = getContext("CountryspotService");
export let results = {};
let renderResults = {};
export let users = [];
let countries = [];
let spots = [];

onMount(async () => {
        results = await countryspotService.getAnalyticsData();
        renderResults = results.data;
        users = await countryspotService.getAllUsers();
        countries = await countryspotService.getAllCountries();
        spots = await countryspotService.getAllSpots();   
    })

</script>

<div class="box box-link-hover-shadow">
    <h2 class="title">
      Application Analytics
    </h2>
    <table class="table is-fullwidth is-striped">
    <thead>
        <tr>
            <th>Item</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Users
            </td>
            <td>
                {users.length}
            </td>
        </tr>
        <tr>
            <td> 
                countries
            </td>
            <td>
                {countries.length}
            </td>
        </tr>
        <tr>
            <td> 
                Spots
            </td>
            <td>
               {spots.length}
            </td>
        </tr>
        <tr>
            <td>
                Average Countries Per User
            </td>
            <td>
                {renderResults.averageCountriesPerUser}
            </td>
        </tr>
        <tr>
            <td>
                Average Spots Per User
            </td>
            <td>
                {renderResults.averageSpotsPerUser}
            </td>
        </tr>
        <tr>
            <td>
                Average Spots Per Country
            </td>
            <td>
                {renderResults.averageSpotsPerCountry}
            </td>
        </tr>     
        <tr>
            <td>
                Most Countries
            </td>
            <td>
                {renderResults.mostCountries}
            </td>
        </tr> 
        <tr>
            <td>
                Least Countries 
            </td>
            <td>
                {renderResults.leastCountries}
            </td>
        </tr>
    </tbody>
  </div>
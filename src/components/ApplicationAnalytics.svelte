<!-- <script>
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
  </div> -->
  <script>
    import { getContext, onMount } from "svelte";
    import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm';
  
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
  
      renderChart();
    });
  
    let chart;
  
    function renderChart() {
      // @ts-ignore
      chart = new Chart("#chart", {
        title: "Application Analytics",
        type: "bar",
        height: 250,
        colors: ['#7cd6fd'], // Example color
        data: {
          labels: [
            'Users',
            'Countries',
            'Spots',
            'Avg Countries/User',
            'Avg Spots/User',
            'Avg Spots/Country',
            'Most Countries',
            'Least Countries'
          ],
          datasets: [
            {
              name: 'Total', // The name of the dataset
              values: [
                users.length,
                countries.length,
                spots.length,
                renderResults.averageCountriesPerUser,
                renderResults.averageSpotsPerUser,
                renderResults.averageSpotsPerCountry,
                renderResults.mostCountries,
                renderResults.leastCountries
              ]
            }
          ]
        }
      });
    }
  </script>
  
  <div class="box box-link-hover-shadow">

    <div id="chart"></div>
  </div>
  
  <style>
    #chart {
      margin-top: 20px;
    }
  </style>
  
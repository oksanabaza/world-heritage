<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import { getContext, onMount } from "svelte";

    const countryspotService = getContext("CountryspotService");

    let applicationData = {
    labels: ['Users', 'Countries', 'Spots'],
    datasets: [
      {
        values: [0, 0, 0]
      }
    ]
  };

    let categoryData = {
        labels: ['Class', 'Festival', 'Other', 'Shop', 'Exhibition', 'Knit Night' ],
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0]
            }
        ],
    }

  onMount(async () => {
      let userList = await countryspotService.getAllUsers();
      applicationData.datasets[0].values[0] = userList.length;
      let spotList = await countryspotService.getAllSpots();
      applicationData.datasets[0].values[1] = spotList.length;
      let countryList = await countryspotService.getAllCountries();
      applicationData.datasets[0].values[2] = countryList.length;

      let info = await countryspotService.getSpotsPerCategory();
      const labels = info.map((item) => {
        return item._id;
      })
      const values = info.map((item) => {
        return item.totaldocs;
      })
      categoryData.labels = labels;
      categoryData.datasets[0].values = values;
  })
</script>

<MainNavigator/>
<div class=section>
  <div class="box box-link-hover-shadow"> 
    <div class="columns">
      <div class="column box has-text-centered">
        <h1 class="title is-4">Application Data</h1>
          <Chart data={applicationData} type="bar"  />
      </div>
    </div>
  </div>
</div>
    
<div class=section>
  <div class="box box-link-hover-shadow"> 
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title is-4">Number of Spots Per Category</h1>
          <Chart data={categoryData} type="pie" maxSlices={categoryData.labels.length} />
      </div>
    </div>
  </div>
</div>
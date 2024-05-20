<script>
    
import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
import {getContext} from "svelte";

const countryspotService = getContext("CountryspotService")
countryspotService.logout();

</script>


<div class="columns is-vcentered">
    <div class="column is-one-third-right">
        <WelcomeNavigator/>
    </div>   
</div>
<div class="columns is-vcentered ">
    <figure class="image">
        <img src="" alt="country supplies">
    </figure>
    <div class="column is-right">

    </div>
</div>

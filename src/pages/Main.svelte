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


<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Router from "svelte-spa-router";
  import { CountryspotService } from "./services/CountryspotService"
  import { setContext } from "svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import CountryView from "./pages/CountryView.svelte";
  import EditSpot from "./pages/EditSpot.svelte";
  import AdminDashboard from "./pages/AdminDashboard.svelte";
  import MyAccount from "./pages/MyAccount.svelte";
  import Charts from "./pages/Charts.svelte";
  import Map from "./pages/Map.svelte";
  import SpotView from "./pages/SpotView.svelte";
  import PhotoGallery from "./pages/PhotoGallery.svelte";


  // setContext("CountryspotService", new CountryspotService("https://placemark-br40.onrender.com"));
 setContext("CountryspotService", new CountryspotService("http://localhost:8080"));
  

  let routes = {
  "/": Main,
  "/login": Login,
  "/signup": Signup,
  "/main": Main,
  "/dashboard": Dashboard, 
  "/logout": Main,
  "/country/:id": CountryView,
  "/country/:countryid/spot/:spotid": EditSpot,
  "/admin-dashboard": AdminDashboard,
  "/my-account": MyAccount,
  "/charts": Charts,
  "/map": Map,
  "/spot/:spotid": SpotView,
  "/photogallery": PhotoGallery,

}
</script>

<div class='welcome-background'>
  <div class="container">
    <Router {routes}/>
  </div>
</div>
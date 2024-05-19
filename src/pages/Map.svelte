<script>
  //  import 'leaflet/dist/leaflet.css';
    import MainNavigator from "../components/MainNavigator.svelte";
    import {LeafletMap} from "../services/leaflet-map.js"
    import {getContext, onMount} from "svelte";
    
    const CountryspotService = getContext("CountryspotService");

    const mapConfig = {
        location: {lat: 53.1424, lng: -7.6921},
        zoom: 8,
        minZoom: 1,
    };

    let map = null;

    onMount(async () => {
        map = new LeafletMap("countryspot-map", mapConfig);
        map.showZoomControl();
        const spots = await CountryspotService.getAllSpots();
        
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        const categories = spots.map((spot) => {
            return spot.category;
        }).filter(onlyUnique)
        
        categories.forEach(category => {
            map.addLayerGroup(category);
        })

        spots.forEach(spot => {
            addSpotMarker(spot);
        });
        map.showLayerControl();
    });

    function addSpotMarker(spot) {
        const spotStr = `${spot.placeName}`;
        map.addMarker({lat: spot.lat, lng: spot.lng}, spotStr, spot.category);
    }
</script>

<MainNavigator/>
<div class="box" id="countryspot-map" style="height:800px"></div>
<script>
   // import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from "../services/leaflet-map.js"
    import {getContext, onMount} from "svelte";

    const countryspotService = getContext("CountryspotService");
    export let countryId;
    let spotList = [];

    const mapConfig = {
        location: {lat: 53.1424, lng: -7.6921},
        zoom: 7,
        minZoom: 1,
    };

    let map = null;

    onMount(async () => {
        map = new LeafletMap("countryspot-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();

        spotList = await countryspotService.getSpotsByCountryId(countryId);
        spotList.forEach(spot => {
            addSpotMarker(spot);
        })
        });

    export function addSpotMarker(spot) {
        map.addMarker({lat: spot.lat, lng: spot.lng}, spot.placeName);
    }


</script>


<div class="box" id="countryspot-map" style="height:800px">
</div>
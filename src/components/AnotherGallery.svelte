<script>
// @ts-nocheck

	import Gallery from 'svelte-image-gallery'
    import MainNavigator from './MainNavigator.svelte';
    import {getContext, onMount} from "svelte";

    let allImages = []
    const CountryspotService = getContext("CountryspotService");

    onMount(async () => {
        const spots = await CountryspotService.getAllSpots();
        spots.forEach(spot => {
            allImages = allImages.concat(spot.images);
        })
    })

</script>

<MainNavigator/>
<div class="box box-link-hover-shadow colored-background" id="" style="height:800px">
    <div class="title">UNESCO Gallery Worldwide</div>
        <Gallery gap="10" maxColumnWidth="200">
            {#each allImages as image }
                <img src={image.img} alt="">
            {/each}
        </Gallery>
    </div>



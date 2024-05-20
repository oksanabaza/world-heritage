<script>
    import {getContext, createEventDispatcher} from "svelte";

    export let image;
    export let spotid;
    let spot;
    const countryspotService = getContext("CountryspotService"); 
    const dispatch = createEventDispatcher();

    export async function deleteImage() {
        const success = await countryspotService.deleteImage(spotid, image.imgid)
        if (success) {
            dispatch("message", {})
        }
    }

</script>

<div class="container">
    <figure class="image is-128x128">
        <img src={image.img} alt="user added">
        <button class="button is-fullwidth" on:click={deleteImage}>Delete Image</button>
    </figure>
</div>
       
   
    

        



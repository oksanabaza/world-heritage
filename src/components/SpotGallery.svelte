<script>
    import Image from "./Image.svelte";
    import {createEventDispatcher} from "svelte";
    import SpotImage from "./SpotImage.svelte";
    
    const dispatch = createEventDispatcher();
    export let images = [];
    export let spotid;

    async function refresh() {
        dispatch("message");
    }

</script>    
    
<section class="section">
    <div class="container">
        <h1 class="title">Photo Gallery</h1>
            <div class="container 	" >
                <div class="columns is-inline-flex is-flex-direction-row is-flex-wrap-wrap">
                        {#each images as image}
                        <div class="column">
                            <Image image={image} spotid={spotid} on:message={refresh} />
                        </div>
                        {/each}        
                </div>
            </div>        
    </div>
</section>
<section>
       <div class="column">
            <SpotImage spotid={spotid} on:message={refresh}/>
        </div>
</section>





    

    
    
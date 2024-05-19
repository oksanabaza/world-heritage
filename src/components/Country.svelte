<script>
  import {getContext, createEventDispatcher} from "svelte";

  export let title;
  export let countryid;
  const countryspotService = getContext("CountryspotService");
  const dispatch = createEventDispatcher();
   
  async function deleteCountry() {  
    const success = await countryspotService.deleteCountry(countryid);
      if(success){
          dispatch("message")
        }
    }
</script>

<div class="box box-link-hover-shadow ">
    <h2 class="title">
      {title}
    </h2>
    <a href="#/country/{countryid}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button on:click={deleteCountry} class="button">
      <span class="icon-is-small">
        <i class="fas fa-trash"></i>
      </span></button>
  </div>
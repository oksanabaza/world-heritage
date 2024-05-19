<script>
    import CountrySpotBrand from "./CountrySpotBrand.svelte";
</script>

<nav class="navbar">
    <div class="navbar-brand">
    <CountrySpotBrand/>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a id="dashboard" class="button colored-btn" href="/#/dashboard"> Dashboard </a>
            <a id="admin-dashboard" class="button colored-btn" href="/#/admin-dashboard">Admin Dashboard</a>
            <a id="map" class="button colored-btn" href="/#/map">Map</a>
            <a id="charts" class="button colored-btn" href="/#/charts">Charts</a>
            <!-- <a id="gallery" class="button" href="/#/photogallery">Gallery</a> -->
            <a id="my-account" class="button colored-btn" href="/#/my-account"> My Account </a>
            <a id="logout" class="button colored-btn" href="/#/logout"> Logout </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
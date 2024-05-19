<!-- <script>
    import CountrySpotBrand from "./CountrySpotBrand.svelte";
</script>
<div>
<nav class="navbar" aria-label="main-navigation">
    <div class="navbar-brand">
        <CountrySpotBrand/>
    </div>
</nav>
    <div class="columns is-centered is-vcentered">
        <div class="column is-half">
          <div class="box un-padding" style="height: 50%;">
            <div class="test columns is-vcentered buttons">
              <div class="column has-text-centered">
                <h1 style="font-size: 2rem;">Login</h1> 
                <div style="padding:40px">
                  Use your email and password to login into your account
                </div>
                <a class="button is-medium" id="login" href="/#/login">Log In</a>
              </div>
              <div class="column has-text-centered is-colored">
                <h1 style="font-size: 2rem;">Hi there!</h1> 
                <div style="padding:40px">
                  If you don't have an account, you can sign up here.
                </div>
                <a class="button is-medium" id="signup" href="/#/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</div> -->
<script>
    import CountrySpotBrand from "./CountrySpotBrand.svelte";
    import { onMount } from "svelte";

    let currentRoute = "";

    onMount(() => {
        // Function to update the current route based on the hash
        const updateRoute = () => {
            currentRoute = window.location.hash;
        };

        // Initialize the current route
        updateRoute();

        // Add event listener for hash changes
        window.addEventListener("hashchange", updateRoute);

        // Cleanup event listener on component destroy
        return () => {
            window.removeEventListener("hashchange", updateRoute);
        };
    });

    $: shouldShow = currentRoute !== "#/login" && currentRoute !== "#/signup";
</script>

<style>
    .red-background {
        background-color: red;
    }
</style>

<div>
    <nav class="navbar" aria-label="main-navigation">
        <div class="navbar-brand">
            <CountrySpotBrand/>
        </div>
    </nav>
    {#if shouldShow}
        <div class="columns is-centered is-vcentered">
            <div class="column is-half">
                <div class="un-padding box" >
                    <div class=" columns is-vcentered ">
                        <div class="column has-text-centered">
                            <h1 style="font-size: 2rem;">Login</h1> 
                            <div style="padding:40px">
                                Use your email and password to login into your account
                            </div>
                            <a class="button is-medium colored-btn" id="login" href="/#/login">Log In</a>
                        </div>
                        <div class="column has-text-centered is-colored">
                            <h1 style="font-size: 2rem;">Hi there!</h1> 
                            <div style="padding:40px">
                                If you don't have an account, you can sign up here.
                            </div>
                            <a class="button is-medium" id="signup" href="/#/signup">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

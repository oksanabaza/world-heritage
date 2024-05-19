<script>
    import { getContext, onMount, createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    const countryspotService = getContext("CountryspotService");
    let userList = [];
    let userid;

    onMount(async () => {
        userList = await countryspotService.getAllUsers();
    })

    export async function refreshUserList() {
        userList = await countryspotService.getAllUsers();
    }

    async function deleteUser(userid) {  
        const success = await countryspotService.deleteUser(userid);
        if(success){
             dispatch("message")
        }
    }

</script>
<section class="section">
    <h1 class="title">User List</h1>
    <div class="box box-link-hover-shadow">
      <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Permission Level</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {#each userList as user}
          <tr>
            <td>
              {user.firstName}
            </td>
            <td>
              {user.lastName}
            </td>
            <td>
              {user.email}
            </td>
            <td>
              {user.permission}
            </td>
            <td>
              <button on:click={() => { deleteUser(user._id) }} class="button">
              <i class="fas fa-trash"></i>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
</section>

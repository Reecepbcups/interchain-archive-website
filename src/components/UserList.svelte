<script>

    //  dispatcher
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // import {fade, slide, scale} from 'svelte/transition';
    // import {flip} from 'svelte/animate';
    import UserDetails from './UserDetails.svelte';        

    export const queryAllPastSpaces = async () => {
        // {
        // "7910872": {
        //     "Cosmos__Prop_82_and_paths_forward.mp3": "/2022/11/7910872/Cosmos__Prop_82_and_paths_forward.mp3"
        //     },
        //  }
        const data = await fetch("https://www.cosmosibc.space/json_data/past_spaces.json");
        const json = await data.json();                        
        return json;
    }

    export const queryAllFollowingData = async () => {
        // matches isd to their name, profile, username, etc.
        const data = await fetch("https://www.cosmosibc.space/json_data/user_data.json");
        const json = await data.json();
        // get the users key
        const users = json.users;
        return users;
    }

    const getUsers = async () => {
        let users = {};
        // Id -> {
            // name
            // username
            // profile_image_url        
        
        const pastSpaces = await queryAllPastSpaces();
        let users_with_spaces = [];
        for(const k of Object.keys(pastSpaces)) {            
            users_with_spaces.push(k);
        }
        // console.log(`Past user spaces: ${users_with_spaces}`)
        
        const userData = await queryAllFollowingData();
        for(const [key, value] of Object.entries(userData)) {    
            // if key of type string is not in users_with_spaces, skip
            if(!users_with_spaces.includes(key)) {
                continue;
            }
            users[key] = value;            
        }
        
        return users;
    }            

    const userClickHandler = (user_id) => {        
        dispatch('clickedUser', user_id);
    }

    let searchTerm = ""

</script>


<!-- input search bar -->
<input type="text" bind:value={searchTerm} placeholder="Search for a user" />

<!-- use transition:fade to fade in and out-->
<div class="space-list">

    

    {#await getUsers()}
	    <p>Loading...</p>
    {:then users}
        {#each Object.entries(users) as [id, user]}       
        
        {#if user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1}
            <div on:click={() => userClickHandler(id)}>                
                <UserDetails user={user} />
            </div>
        {/if}

        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
    .space-list {
        display: grid;                  
        grid-template-columns: 1fr 1fr 1fr; /*3 * one fraction of the width = 3 sets*/
        grid-gap: 20px;
    }
</style>
<script>

    //  dispatcher
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    import {fade, slide, scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    
    import SpaceStore from '../stores/SpaceStore';    
    import SpaceDetails from './SpaceDetails.svelte';

    import asyncDerivedConsistent from '../stores/consistent'
    import UserDetails from './UserDetails.svelte';

    // import uuidv4 from 'uuid/v4';


    // const data_stream = asyncDerivedConsistent(pokemon_id, fetchImage)

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
        <!-- <p>Spaces {l}</p> -->
        <!-- {#each l as space (space.id)}    
            <div in:fade out:slide|local animate:flip={{duration: 500}}>
                <SpaceDetails space={space} />
            </div>
        {/each} -->
        {#each Object.entries(users) as [id, info]}    
            <!-- <div in:fade out:slide|local animate:flip={{duration: 500}}>
                <SpaceDetails space={space} />
            </div> -->            
            <!-- <p>{id}</p>
            <p>{info.name}</p> -->     
            
            <div on:click={() => userClickHandler(id)}>
                <UserDetails user={info} searchTerm={searchTerm}/>
            </div>

        {/each}


    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <!-- {#each $SpaceStore as space (space.id)}    
        <div in:fade out:slide|local animate:flip={{duration: 500}}>
            <SpaceDetails space={space} />
        </div>
    {/each} -->
</div>

<style>
    .space-list {
        display: grid;          
        /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
        grid-template-columns: 1fr 1fr 1fr; /*one fraction of the width*/
        grid-gap: 20px;
    }
</style>
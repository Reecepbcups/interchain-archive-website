<script>
    import {fade, slide, scale} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    
    import SpaceStore from '../stores/SpaceStore';    
    import SpaceDetails from './SpaceDetails.svelte';

    import asyncDerivedConsistent from '../stores/consistent'

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
        // console.log(json);
        return json;
    }

    export const queryAllFollowingData = async () => {
        // matches isd to their name, profile, username, etc.
        const data = await fetch("https://www.cosmosibc.space/json_data/user_data.json");
        const json = await data.json();
        return json;
    }

    // const getUsers = async () => {
    //     let l = [];

    //     const pastSpaces = await queryAllPastSpaces();

    //     // loop through all pastSpaces keys
    //     for (const key in pastSpaces) {
    //         // loop through all the spaces in each key
    //         for (const space in pastSpaces[key]) {
    //             l.push({
    //                 id: Math.random(),
    //                 title: "Governance_2.0_%26_%23CosmosHub_future__%7CStakin_Twitter_Space_%2314.mp3",
    //                 url: "/2022/10/1078740737393598464/Governance_2.0_%26_%23CosmosHub_future__%7CStakin_Twitter_Space_%2314.mp3",
    //                 host: key,
    //                 picture: ""
    //             })
    //         }
    //     }

    //     // save l to the store
    //     // SpaceStore.set(l);
    //     return l;
    // }        


</script>


<!-- use transition:fade to fade in and out-->
<div class="space-list">

    {#await getUsers()}
	    <p>Loading...</p>
    {:then l}
        <!-- <p>Spaces {l}</p> -->
        {#each l as space (space.id)}    
            <div in:fade out:slide|local animate:flip={{duration: 500}}>
                <SpaceDetails space={space} />
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
        grid-template-columns: 1fr 1fr; /*one fraction of the width*/
        grid-gap: 20px;
    }
</style>
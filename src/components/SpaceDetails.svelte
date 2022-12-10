<!-- https://fontawesome.com/docs/web/add-icons/how-to -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

<script>
    // import {createEventDispatcher} from 'svelte';
    // const dispatch = createEventDispatcher();
    import Card from "../shared/Card.svelte";
    // import PollStore from "../stores/PollStore";
    import Button from "../shared/Button.svelte";
    import { tweened } from "svelte/motion";

    export let space;    

    const makeReadableTitle = (title) => {
        let newTitle = title.replaceAll("_", " ");
        if(newTitle.includes("/")) {
            let temp = newTitle.split("/");
            newTitle = temp[temp.length - 1];
        }

        newTitle = newTitle.replaceAll(".mp3", "");
        return decodeURIComponent(newTitle);
    };

</script>

<Card>
    <div class="space">
        <h4>{makeReadableTitle(space.title)}</h4>

        <div class="picture">
            <img src={space.picture} alt="" />
        </div>

        <div class="player">            
            <audio controls>                
                <source src="https://www.cosmosibc.space{encodeURI(space.url)}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</Card>

<style>
    .player {        
        text-align: center;
        /* round corners */        
        /* scale it down to 40% of the size */                
    }
    .picture {
        margin-top: 20px;
        text-align: center;
        /* round corners */
        overflow: hidden;
        /* scale it down to 40% of the size */
        transform: scale(0.8);   
        padding: 5px 10px;     
    }
</style>

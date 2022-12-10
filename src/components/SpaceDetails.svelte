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
        <!-- <h4>{space.id}</h4> -->
        <!-- <p>Total Votes: {totalVotes}</p>
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%" />
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%" />
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button flat={false} on:click={() => deleteForm(poll.id)}
                >Delete</Button
            >
        </div> -->

        <div class="picture">
            <img src={space.picture} alt="" />
        </div>

        <div class="player">            
            <audio controls>                
                <source src="https://www.cosmosibc.space{encodeURI(space.url)}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        </div>

        <!--  On click open a modal with extra debugging info? -->
        <!-- <div class="info-button">            
            <button class="btn"><i class="fa fa-bars"></i></button>
        </div> -->
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .player {        
        text-align: center;
        /* round corners */        
        /* scale it down to 40% of the size */                
    }
    .info-button {
        text-align: right;
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
    /* .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answer:hover {
        opacity: 0.6;
    } */
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    /* .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-a {
        border-left: 4px solid #d91b42;
        background: rgba(217, 27, 66, 0.2);
    }
    .percent-b {
        border-left: 4px solid #45c496;
        background: rgba(69, 196, 150, 0.2);
    }
    .delete {
        margin-top: 30px;
        text-align: right;
    } */
</style>

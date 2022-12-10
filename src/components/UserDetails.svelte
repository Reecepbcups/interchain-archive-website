<!-- https://fontawesome.com/docs/web/add-icons/how-to -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<script>
    // import {createEventDispatcher} from 'svelte';
    // const dispatch = createEventDispatcher();
    import Card from "../shared/Card.svelte";
    // import PollStore from "../stores/PollStore";
    import Button from "../shared/Button.svelte";
    import { tweened } from "svelte/motion";

    export let user;    
    // export let searchTerm;

    const makeDescClickable = (text) => {
        // using regex, find any words that start with @. If found, replace with a link
        let newText = text.replaceAll(/(@\w+)/g, '<a href="https://twitter.com/$1">$1</a>');
        return newText;
    }

</script>

<Card>
    <!-- <div class="space" on:click>        
        <h3><u><a href="https://twitter.com/{user.username}"> {user.name} </a></u></h3>        
        <p>{user.description}</p>        

        <div class="picture">
            <img src={user.profile_image_url} alt="" />            
        </div>
    </div> -->


    <div class="user_profile" on:click>    

        <!-- <h3>{user.data.name} <u><a href="https://twitter.com/{user.data.username}"> @{user.data.username}</a></u></h3>         -->
        <h3><u><a href="https://twitter.com/{user.username}"> {user.name} </a></u></h3>        

        <p style="height: 75px">{user.description}</p>        

        <div class="picture">
            <img src={user.profile_image_url} alt="" />            
        </div>

        <!-- make the picture card tall -->
        <!-- <div class="picture">
            <img src={user.profile_image_url} alt="" />       
        </div> -->


    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }
    p {
        margin-top: 5%;
        font-size: 16px;
        color: #000;
        margin-bottom: 5%;        
    }
    .picture {        
        text-align: center;
        /* round corners */
        overflow: hidden;
        /* scale it down to 40% of the size */
        /* transform: scale(0.8);    */
        /* padding: 5px 10px;     
        max-width: 33%;
        height: 300px; */        

        /* grid */                
    }    
    img {
        max-width: 100%;
        /* center */
        
    }    
    div:hover {
        background-color: #f7f7f7;
        color: white;
        transition: top ease 0.5s;
        cursor: pointer;
    }
    div {
        height: 25%;
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

<script>
    import Fa from 'svelte-fa'    
    import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<header on:click={() => dispatch('tabChange', "Home")}>
    <h1>
        <img src="/img/ibc_logo.png" alt="IBC Logo">        
        <br>        
        Interchain Spaces Archive <a href="https://github.com/Reecepbcups/interchain-archive-website"><Fa icon={faGithub} color={"#000"}/></a>
        <a href="https://twitter.com/IBC_Archive"><Fa icon={faTwitter} color={"#1DA1F2"}/></a>
    </h1>
</header>



<style>
    header {
        background: #669;
        padding: 20px;
    }
    h1 {
        margin: 0;
        text-align: center;
        font-size: 24px;
        color: white;      
    }
    img {
        max-width: 120px;
    }
</style>
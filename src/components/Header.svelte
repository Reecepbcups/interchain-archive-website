<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

</script>


<header on:click={() => dispatch('tabChange', "Home")}>
    <h1>
        <img src="/img/ibc_logo.png" alt="IBC Logo">        
        <br>        
        Interchain Spaces Archive
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
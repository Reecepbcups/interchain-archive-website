<script>    
    import Card from "../shared/Card.svelte";    

    export let user;        

    const makeDescClickable = (text) => {
        // using regex, find any words that start with @. If found, replace with a link
        let newText = text.replaceAll(/(@\w+)/g, '<a href="https://twitter.com/$1">$1</a>');
        return newText;
    }

</script>

<Card>
    <div class="user_profile" on:click>    
        <!-- <h3>{user.data.name} <u><a href="https://twitter.com/{user.data.username}"> @{user.data.username}</a></u></h3>         -->
        <h3><u><a href="https://twitter.com/{user.username}"> {user.name} </a></u></h3>        

        <p style="height: 100px">{user.description}</p>        

        <div class="picture">
            <!-- onload="this.width/=2;this.onload=null;" -->
            <img src={user.profile_image_url} alt="" />            
        </div>
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
        max-width: 300px;        
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
</style>

<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import UserList from './components/UserList.svelte';
    import UsersPastSpaceList from './components/UsersPastSpaceList.svelte';
	$: urlParams = new URLSearchParams(window.location.search);

	let items = ["Home"]
	let activeItem = items[0]	

	const changeToHome = (e) => {
		activeItem = e.detail;		
		// Since we only use this function to go back home, then we do that
		window.history.pushState({}, '', '/')
	}	

	const handleNewUserPage = (e) => {
		activeItem = e.detail; // their user_id on twitter	
		if (activeItem === "Home") {
			window.history.pushState({}, '', '/')
		} else {
			window.history.pushState({}, '', `/?user_id=${activeItem}`)
		}	
	}	

</script>

<Header on:tabChange={changeToHome}/>
<main>	
	<Tabs activeItem={activeItem} items={items} on:tabChange={changeToHome}/>

	<!-- http://localhost:8080/?user_id=7910872 -->
	<!-- Does dynamic routing, but I would prefer to do it the [slug] way instead -->
	{#if urlParams.get('user_id') !== null}	
		<UsersPastSpaceList user_id={urlParams.get('user_id')}/>
	{:else}
		{#if activeItem === "Home"}
			<UserList on:clickedUser={handleNewUserPage}/>
		{:else}				
			<UsersPastSpaceList user_id={activeItem}/>
		{/if}
	{/if}


	<!-- Check if url is a string of numbers -->
	<!-- {alert($url.pathname)} -->

	<!-- check if $url.pathname is a string of numbers with regex-->	


	<!-- Show this only when we go to their /url -->
	<!-- <UsersPastSpaceList user_id={urlParams.get('user_id')}/> -->

	
	

	<!-- {#if $url.pathname === '' || $url.pathname === '/'} -->
		

	<!-- {:else if $url.pathname === '/about'}
		<h1>About</h1>	
	{:else if $url.pathname === '/user'}		
		<h1>User: {$url.params}</h1> -->
	<!-- {/if} -->


</main>
<Footer />

<style>
	main {
		max-width: 65%;
		margin: 20px auto;		
	}
</style>
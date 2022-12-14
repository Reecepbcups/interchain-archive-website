<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import UserList from './components/UserList.svelte';
    import UsersPastSpaceList from './components/UsersPastSpaceList.svelte';

	let items = ["Home"]
	let activeItem = items[0]	

	const tabChange = (e) => {
		activeItem = e.detail;		
	}	

	const handleNewUserPage = (e) => {
		activeItem = e.detail; // their user_id on twitter		
	}

</script>

<Header on:tabChange={tabChange}/>
<main>
	<Tabs activeItem={activeItem} items={items} on:tabChange={tabChange}/>

	{#if activeItem === "Home"}		
		<UserList on:clickedUser={handleNewUserPage}/>
	{:else}	
		<!-- Its a users specific page we are on, show unique data -->		
		<UsersPastSpaceList user_id={activeItem}/>
	{/if}


	</main>
<Footer />

<style>
	main {
		max-width: 65%;
		margin: 20px auto;		
	}
</style>
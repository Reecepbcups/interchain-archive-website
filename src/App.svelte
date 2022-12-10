<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import LatestSpaces from './components/SpacesList.svelte';
	// import CreatePollForm from './components/CreatePollForm.svelte';
	import Tabs from './shared/Tabs.svelte';
	import UserList from './components/UserList.svelte';
    import UsersPastSpaceList from './components/UsersPastSpaceList.svelte';

	// tabs
	// let items = ["Current Polls", "Add New Poll"]

	// Probably should sort based off of users instead of latest.
	let items = ["Home"]
	let activeItem = items[0]	

	const tabChange = (e) => {
		activeItem = e.detail;		
	}	

	// const handleNewPoll = (e) => {		
	// 	// polls = [e.detail, ...polls]; // done via store in the PollList now
	// 	activeItem = items[0]; // currentPolls
	// }

	const handleNewUserPage = (e) => {
		activeItem = e.detail; // their user id?		
		// alert(activeItem)
	}

</script>

<Header on:tabChange={tabChange}/>
<main>
	<Tabs activeItem={activeItem} items={items} on:tabChange={tabChange}/>

	<!-- {#if activeItem === "Current Polls"}
		<PollList/>
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:addPoll={handleNewPoll}/>
	{/if} -->

	<!-- TODO: https://svelte.dev/repl/d219a64c734d49fc8c4d7dcdcd734e64?version=3.18.1 -->

	{#if activeItem === "Home"}		
		<!-- <LatestSpaces /> -->
		<UserList on:clickedUser={handleNewUserPage}/>
	{:else}		<!-- Its a users specific page we are on, show unique data -->
		<!-- <p>hey this is another persons page of things</p> -->
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
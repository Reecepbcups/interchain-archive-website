<script>
    import { createEventDispatcher } from "svelte";
    import Card from "../shared/Card.svelte";

    export let user_id; // their twitter id

    async function getUsersPastSpacesSorted() {
        // queries https://www.cosmosibc.space/json_data/past_spaces.json, and sees if the id is in the keys list as string
        // if it is, then return the value of that key which is a object of title: path

        const data = await fetch(
            "https://www.cosmosibc.space/json_data/past_spaces.json"
        );
        const json = await data.json();
        // console.log(Object.keys(json));

        let pastSpaces = json[user_id];

        // sort the above objects based on the value of the title /2022/10 > /2022/9
        if (pastSpaces) {
            let sortedPastSpaces = Object.fromEntries(
                Object.entries(pastSpaces).sort(([, a], [, b]) =>
                    b.localeCompare(a)
                )
            );
            return sortedPastSpaces;
        }
        return pastSpaces;
    }
    let getUsersPastSpacesSortedPromise = getUsersPastSpacesSorted();

    async function getUserInfo(twitter_id) {
        // queries https://www.cosmosibc.space/json_data/past_spaces.json, and sees if the id is in the keys list as string
        // if it is, then return the value of that key which is a object of title: path

        const data = await fetch(
            "https://www.cosmosibc.space/json_data/user_data.json"
        );
        let json = await data.json();
        if (json.users) {
            json = json.users;
        }

        if (!json[user_id]) {
            alert("User not found");
            return null;
        }

        let userData = {
            name: json[user_id].name,
            username: json[user_id].username,
            profile_image_url: json[user_id].profile_image_url,
        };
        return userData;
    }
    let getUserInfoPromise = getUserInfo();

    const convertNumberToMonth = (number) => {
        return {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
        }[number];
    };

    const makeReadableTitle = (title) => {
        let newTitle = title.replaceAll("_", " ");
        if (newTitle.includes("/")) {
            let temp = newTitle.split("/");
            newTitle = temp[temp.length - 1];
        }

        newTitle = newTitle.replaceAll(".mp3", "");
        return decodeURIComponent(newTitle);
    };

    const getDateFromPath = (path) => {
        // /2022/11/7910872/Cosmos__Prop_82_and_paths_forward.mp3
        let temp = path.split("/");
        return `${convertNumberToMonth(temp[2])} ${temp[1]}`;
    };

    const encodeUrl = (url) => {
        // url encode everything except / and .
        return encodeURIComponent(url)
            .replaceAll("%2F", "/")
            .replaceAll("%2E", ".");
    };
</script>

{#await getUsersPastSpacesSortedPromise}
    <p>testing for {user_id}</p>
{:then spacesData}
    {#await getUserInfoPromise}
        <p>Loading: {user_id}</p>
    {:then userInfo}
        <img
            src={userInfo.profile_image_url}
            alt="pfp"
            width="100"
            height="100"
        />
        <h2>
            {userInfo.name} |
            <a href="https://twitter.com/{userInfo.username}"
                >@{userInfo.username}</a
            >
        </h2>
        <!-- <p>{user_id}</p> -->
        <hr />
    {/await}

    {#each Object.values(spacesData) as title}
        <div class="space-container">
            <Card>
                <h3>{makeReadableTitle(title)}</h3>
                <p>{getDateFromPath(title)}</p>
                <audio controls>                                    
                    <source src="https://www.cosmosibc.space{encodeUrl(title)}" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
            </Card>
        </div>
    {/each}
{:catch error}
    <p class="error">{error.message}</p>
{/await}

<style>
    audio { 
        width: 100%;
        filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(100%);       
    }    
    .space-container {
        margin: 1rem;        
    }
    .error {
        font-weight: bold;
        color: red;
    }
</style>

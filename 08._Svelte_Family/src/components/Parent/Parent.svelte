<script>
    import Child from "../Child/Child.svelte";
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    const { name: parentName, children } = $props();

    function handleShowLove(childName) {
        console.log(`${childName} loves ${parentName} very much!`);
    }

    let cookieJar = $state(["🍪","🍪","🍪","🍪"]);

    /* assignment:
        Create the functionality that when a child clicks on a button
        a cookie is eaten from the cookieJar
    */
    function handleEatCookie() {
        cookieJar.pop();

        if (cookieJar.length === 0) {
            cookieJar = ["🍪","🍪","🍪","🍪"];
        }
    };

    //function wipe() {
    //    fridgeMessages.set([]);
    //}
</script>   

<h1>{parentName}</h1><br>

<button onclick={fridgeMessages = fridgeMessagesStore()}>Wipe</button>

{#each cookieJar as cookie}
    {cookie}&nbsp;&nbsp;
{/each}


{#each children as child (child.name)} 
    <!-- <Child name={child.name} /> -->
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}
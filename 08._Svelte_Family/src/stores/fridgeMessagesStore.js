import { writable } from "svelte/store";

// export const fridgeMessages = writable([{ message: "Svelte family fridge" }]);

function fridgeMessagesStore() {
    const { subscribe, set, update } = writable([{ message: "Svelte family fridge" }]);
    return {
        subscribe,
        set,
        update,
        wipe: () => set([{ message: "Svelte family fridge" }])
    }
}

export const fridgeMessages = fridgeMessagesStore();
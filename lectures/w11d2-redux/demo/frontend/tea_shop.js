import configureStore from "./store/store"
import {receiveTea, RECEIVE_TEA} from "./actions/tea_actions"

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    console.log("Welcome to the Tea Shop");
    // const testUser = {
    //     1:{
    //         id: 1,
    //         username: "testUser",
    //         fav_tea: "green tea"
    //     }
    // }

    const store = configureStore();
    window.store = store;
    window.receiveTea = receiveTea
});


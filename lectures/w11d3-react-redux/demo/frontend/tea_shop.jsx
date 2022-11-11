import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import {receiveTea, RECEIVE_TEA} from "./actions/tea_actions"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    // console.log("Welcome to the Tea Shop");
    // const testUser = {
    //     1:{
    //         id: 1,
    //         username: "testUser",
    //         fav_tea: "green tea"
    //     }
    // }
    
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);


    window.store = store;
    window.receiveTea = receiveTea
});


import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import configureStore from './store/store';
import { receiveTea } from './actions/tea_actions';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to our tea shop");
    
    const store = configureStore();

    // Get <div id="root"/>
    const root = document.getElementById("root");

    // Use react to render into the root
    // Passing store as a prop to Root component
    ReactDOM.render(<Root store={store} />, root);



    // ===========================================
    // ================= TESTING =================
    // ===========================================
    // access store from the browser console
    // store has functions like getState and dispatch 
    // predefined on it
    window.store = store;
    // access receiveTea action creator from the browser console
    window.receiveTea = receiveTea;
});
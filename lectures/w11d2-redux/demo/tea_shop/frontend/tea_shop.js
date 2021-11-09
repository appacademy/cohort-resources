import configureStore from './store/store';
import { receiveTea } from './actions/tea_actions';

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to our tea shop");
    
    const store = configureStore();

    // access store from the browser console
    // store has functions like getState and dispatch 
    // predefined on it
    window.store = store;
    // access receiveTea action creator from the browser console
    window.receiveTea = receiveTea;
});
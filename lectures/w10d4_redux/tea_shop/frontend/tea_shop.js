import configureStore from './store/store'; // exported default 

// import { receiveGreenTea } from './actions/tea_actions';
import { receiveTea } from './actions/tea_actions'; // exported various functions
// import * as teaActions from './actions/tea_actions'; teaActions.receiveTea


document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the magic Tea Shop");
    window.store = configureStore(); // Creates Store for us

    window.receiveTea = receiveTea;
})
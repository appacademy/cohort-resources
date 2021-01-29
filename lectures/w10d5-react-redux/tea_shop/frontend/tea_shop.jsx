import configureStore from './store/store'; // exported default 

// import { receiveGreenTea } from './actions/tea_actions';
import { receiveTea } from './actions/tea_actions'; // exported various functions
// import * as teaActions from './actions/tea_actions'; teaActions.receiveTea

import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

const teas = {
    teas: {
        1: {
            id: 1,
            flavor: "oolong",
            amount: 2.75
        },
        2: {
            id: 2,
            flavor: 'jasmine',
            amount: 2
        },
        3: {
            id:3,
            flavor: 'green',
            amount: 4
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore(teas);
    window.store = store; // Creates Store for us

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>,root)


    window.receiveTea = receiveTea;
})
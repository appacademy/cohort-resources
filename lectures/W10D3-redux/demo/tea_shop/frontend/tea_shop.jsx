import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTea } from './actions/tea_actions'; 

document.addEventListener('DOMContentLoaded', () => {
    const preloadedState = {
        teas: {
            1: { flavor: 'Hoji Cha', amount: 5, id: 1 }, 
            2: { flavor: 'Peach', amount: 4, id: 2 }
        }
    }
    const store = configureStore(preloadedState);

    // TESTING
    window.store = store;
    window.receiveTea = receiveTea;
    // END TESTING

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
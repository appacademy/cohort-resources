import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { receiveGreenTea, receiveTea } from './actions/tea_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // FOR TESTING
    window.store = store;
    window.receiveGreenTea = receiveGreenTea;
    window.receiveTea = receiveTea;
    // FOR TESTING

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
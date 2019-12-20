import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTea} from './actions/tea_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.store = store;
    window.receiveTea = receiveTea;
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEl)
})
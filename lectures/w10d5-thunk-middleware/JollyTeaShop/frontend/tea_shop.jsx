import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { receiveGreenTea, receiveTea, fetchAllTeas, createTea } from './actions/tea_actions';
import * as TeaAPIUtil from './utils/tea_api_utils';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // FOR TESTING
    window.store = store;
    window.receiveGreenTea = receiveGreenTea;
    window.receiveTea = receiveTea;
    window.TeaAPIUtil = TeaAPIUtil;
    window.fetchAllTeas = fetchAllTeas;
    window.createTea = createTea;
    // FOR TESTING

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
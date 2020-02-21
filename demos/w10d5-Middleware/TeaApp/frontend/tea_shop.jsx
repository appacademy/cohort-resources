import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { addTea, addHerbal } from "./actions/tea_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const store = configureStore();
    window.store = store;
    window.addHerbal = addHerbal;
    window.addTea = addTea;

    ReactDOM.render(<Root store={store}/>, root);

});
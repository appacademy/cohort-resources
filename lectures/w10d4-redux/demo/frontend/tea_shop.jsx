import configureStore from "./store/store";
import { receiveJasmineTea, receiveTea } from "./actions/tea_action";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    console.log("welcome to the magic tea shop")
    const store = configureStore();
    window.store = store;
    window.receiveJasmineTea = receiveJasmineTea;
    window.receiveTea = receiveTea;
    const root = document.getElementById('root');
    // ReactDOM.render(<h1>Tea time with React</h1>, root)
    ReactDOM.render(<Root store={store}/>, root)
})
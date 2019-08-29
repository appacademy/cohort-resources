import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveGreenTea, receiveTea } from './actions/tea_actions';
import Root from './components/Root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let teas = {
    1: {
      id: 1,
      type: "green",
      amount: 2.75
    },
    2: {
      id: 2,
      type: "oolong",
      amount: 3
    },
  };

  // `Object.values` turns the object into an array of values
  // teas = Object.values(teas);

  const store = configureStore({ teas });
  window.store = store;
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;

  ReactDOM.render(<Root store={store} />, root);
});
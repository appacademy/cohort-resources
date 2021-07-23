import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { receiveGreenTea, receiveTea } from './actions/tea_actions';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.");
  const root = document.getElementById('root');
  const store = configureStore(); // creates the store

  window.store = store; // lets us access the store from the window (for testing)
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;

  ReactDOM.render(<Root store={store} />, root);
})
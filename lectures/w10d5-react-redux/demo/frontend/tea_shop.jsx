import configureStore from './store/store';
import { receiveTea } from './actions/tea_actions';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from  './components/root'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")

  const store = configureStore();
  window.store = store;
  window.receiveTea = receiveTea;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
})
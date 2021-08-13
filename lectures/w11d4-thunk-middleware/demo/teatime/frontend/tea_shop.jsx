import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { receiveTea } from './actions/tea_actions';
import * as TeaApiUtil from './util/tea_api_util';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.");
  const root = document.getElementById('banana');
  const store = configureStore(); // creates the store

  window.store = store; // lets us access the store from the window (for testing)
  window.receiveTea = receiveTea;
  window.TeaApiUtil = TeaApiUtil;

  ReactDOM.render(<Root store={store} />, root);
})
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import {receiveGreenTea, receiveTea} from './actions/tea_actions';
import { receiveCookie } from './actions/cookies_actions';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")

  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
  window.receiveCookie = receiveCookie

  ReactDOM.render(<Root store={store} />, root)
})
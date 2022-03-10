import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import {receiveGreenTea, receiveTea} from './actions/tea_actions';
import { receiveCookie } from './actions/cookies_actions';
import * as TeaApiUtil from './util/tea_api_util';

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")

  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
  window.receiveCookie = receiveCookie
  window.TeaApiUtil = TeaApiUtil;

  ReactDOM.render(<Root store={store} />, root)
})
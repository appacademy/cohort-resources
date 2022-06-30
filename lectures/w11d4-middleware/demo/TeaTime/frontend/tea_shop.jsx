import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveGreenTea, receiveTea } from './actions/tea_actions';
import * as TeaAPIUtil from './util/tea_api_util';
import {fetchAllTeas, createTea} from './actions/tea_actions'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")
  const store = configureStore();
  window.store = store;
  // only for testing
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
  window.TeaAPIUtil = TeaAPIUtil;
  window.fetchAllTeas = fetchAllTeas;
  window.createTea = createTea;
  //

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
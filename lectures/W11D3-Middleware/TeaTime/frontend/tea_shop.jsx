import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store'; // show vscode file path autocomplete
import { receiveGreenTea, receiveTea } from './actions/tea_actions';
import * as TeaAPIUtil from './util/tea_api_util';
import * as TeaActions from './actions/tea_actions'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")
  const store = configureStore();
  window.store = store;
  window.receiveGreenTea = receiveGreenTea;
  window.receiveTea = receiveTea;
  window.TeaAPIUtil = TeaAPIUtil;
  window.TeaActions = TeaActions;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
import configureStore from './store/store';
import * as TeaActions from './actions/tea_actions';
import * as TeaAPIUtil from './utils/tea_utils';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from  './components/root'

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")

  const store = configureStore();
  window.store = store;
  window.TeaActions = TeaActions;
  window.TeaAPIUtil = TeaAPIUtil;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
})
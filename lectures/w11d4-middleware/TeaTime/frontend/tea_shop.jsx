import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as TeaApiUtil from './util/teaApi'
import { receiveAllTeas, receiveTea } from './actions/tea_actions';

// testing

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to our tea shop");
  const store = configureStore();
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);

  // ================= TESTING =================
  window.store = store;
  window.receiveTea = receiveTea;
  window.receiveAllTeas = receiveAllTeas
  window.TeaApiUtil = TeaApiUtil
});
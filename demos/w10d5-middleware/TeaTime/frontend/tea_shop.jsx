import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTea } from './actions/tea_actions';
import Root from './components/Root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // 
  window.store = store;
  window.receiveTea = receiveTea;

  ReactDOM.render(<Root store={store} />, root);
});
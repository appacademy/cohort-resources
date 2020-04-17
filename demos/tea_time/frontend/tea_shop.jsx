import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// For Testing
import { receiveTea, requestTeas } from './actions/tea_actions';
import { fetchTeas, createTea } from './util/tea_api_util';
// End Testing


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  // More testing
  window.store = store;
  window.receiveTea = receiveTea;
  window.fetchTeas = fetchTeas;
  window.createTea = createTea;
  window.requestTeas = requestTeas;
  // End testing

  ReactDOM.render(<Root store={store} />, root);
});
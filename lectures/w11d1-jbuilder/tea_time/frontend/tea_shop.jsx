import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// For Testing
import { receiveTea, requestTeas, requestTea } from './actions/tea_actions';
import { fetchTeas, fetchTea, createTea } from './util/tea_api_util';
import { selectTransactionsByTea } from './reducers/selectors';
// End Testing


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  
  // More testing
  window.store = store;
  window.receiveTea = receiveTea;
  window.fetchTeas = fetchTeas;
  window.fetchTea = fetchTea;
  window.createTea = createTea;
  window.requestTeas = requestTeas;
  window.requestTea = requestTea;
  window.selectTransactionsByTea = selectTransactionsByTea;
  // End testing

  ReactDOM.render(<Root store={store} />, root);
});
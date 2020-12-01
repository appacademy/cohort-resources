import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// For Testing
import { receiveTea, requestTeas, requestTeaDetail } from './actions/tea_actions';
import { fetchTeas, createTea, fetchTea } from './util/tea_api_util';
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
  window.fetchTea = fetchTea;
  window.requestTeaDetail = requestTeaDetail;
  // End testing

  ReactDOM.render(<Root store={store} />, root);
});
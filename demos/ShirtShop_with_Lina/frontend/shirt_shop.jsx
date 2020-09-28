import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { addButtonUp, addShirt } from './actions/shirt_actions';
import Root from './components/root';
import {fetchShirt} from './utils/shirt_api_util'
import {fetchShirtDetail} from './actions/shirt_actions'
import {getReviews } from './reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
  //debugger
  const root = document.getElementById('button-up');

  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  // window methods for development and testing
  window.store = store;
  // window.addButtonUp = addButtonUp;
  // window.addShirt = addShirt;
  window.fetchShirt = fetchShirt
  window.fetchShirtDetail = fetchShirtDetail
  window.getReviews = getReviews
});
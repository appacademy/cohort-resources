import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { receiveTea } from './actions/tea_actions';
import Root from './components/Root';
import * as TeaAPIUtils from './utils/tea_API_utils'; 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTea = receiveTea;

  window.TeaAPIUtils = TeaAPIUtils; 

  ReactDOM.render(<Root store={store} />, root);
});
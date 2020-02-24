import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById("content");

  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      users: {
        [id]: currentUser
      }
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});

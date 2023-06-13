import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import { Provider } from 'react-redux';
import { requestTeas, postTea } from './utils/tea_api_utils';
import { fetchAllTeas} from './store/teaReducer';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer';



// testing
// window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.requestTeas = requestTeas;
window.postTea = postTea;
window.fetchAllTeas = fetchAllTeas;
window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
//

const initializeApp = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser')); // grab current user object from session storage
  let initialState = {};

  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    };
  };

  // initialize store with currentUser if logged in
  const store = configureStore(initialState);
  window.store = store;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// we get our csrf token and potentially a current user before initializing our app
restoreSession().then(initializeApp);

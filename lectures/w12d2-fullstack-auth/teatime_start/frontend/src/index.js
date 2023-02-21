import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {receiveTea, receiveTeas, removeTea, fetchTeaDetail } from './store/teaReducer';
import { Provider } from 'react-redux';
import { requestTeas, postTea } from './utils/tea_api_utils';
import { fetchAllTeas} from './store/teaReducer';
import { restoreSession } from './store/csrf';
import { loginUser, logoutUser, signupUser } from './store/usersReducer';

const initialState = {
  // teas: {
  //   1: {
  //     id: 1, flavor: 'green', price: 5.33
  //   }
  // }
};


// testing
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.requestTeas = requestTeas;
window.postTea = postTea;
window.fetchAllTeas = fetchAllTeas;
window.fetchTeaDetail = fetchTeaDetail;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.signupUser = signupUser;
//

const initializeApp = () => {
  // debugger
  let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let initialState = {};
  
  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    }
  }

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
}

// ensure that we check if we're logged in before initializing our app
// also sets up csrf and currentUser if we need it
restoreSession().then(initializeApp);

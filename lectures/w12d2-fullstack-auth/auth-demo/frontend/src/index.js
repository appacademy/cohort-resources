import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { receiveTea, receiveTeas, removeTea, fetchAllTeas, createTea, fetchTeaDetail } from './store/teaReducer';
import { restoreSession } from './store/csrf';
import { login, logout } from './utils/user_api_utils';
import { loginUser, logoutUser } from './store/userReducer';


const initializeApp = async () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState;
  if (currentUser.user) {
    initialState = {
      users: {
        [currentUser.user.id]: currentUser.user
      }
    };
  } else {
    initialState = {};
  }
  
  const store = configureStore(initialState);
  
  // testing
  window.store = store;
  window.receiveTea = receiveTea;
  window.receiveTeas = receiveTeas;
  window.removeTea = removeTea;
  window.fetchAllTeas = fetchAllTeas;
  window.createTea = createTea;
  window.fetchTeaDetail = fetchTeaDetail;
  window.restoreSession = restoreSession;
  window.logout = logout;
  window.login = login;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  //
  
  const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

restoreSession().then(initializeApp);
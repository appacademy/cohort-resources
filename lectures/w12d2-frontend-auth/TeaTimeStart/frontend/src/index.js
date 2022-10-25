import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {receiveTea, receiveTeas, removeTea, fetchTeaDetail } from './store/teaReducer';
import { Provider } from 'react-redux';
import { requestTeas, postTea } from './utils/tea_api_utils';
import { fetchAllTeas} from './store/teaReducer';
import { csrfFetch, restoreSession } from './store/csrf';
import { loginUser } from './store/sessionReducer';

const initialRender = () => {
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState = {};
  if (currentUser) {
    initialState = {
      users: { [currentUser.id]: currentUser },
      session: { currentUser: currentUser.id }
    };
    
  }
  
  const store = configureStore(initialState);
  
  // testing
  window.store = store;
  window.receiveTea = receiveTea;
  window.receiveTeas = receiveTeas;
  window.removeTea = removeTea;
  window.requestTeas = requestTeas;
  window.postTea = postTea;
  window.fetchAllTeas = fetchAllTeas;
  window.fetchTeaDetail = fetchTeaDetail;
  window.csrfFetch = csrfFetch;
  window.loginUser = loginUser;
  //
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

restoreSession().then(initialRender);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {receiveTea, receiveTeas, removeTea, fetchTeaDetail } from './store/teaReducer';
import { Provider } from 'react-redux';
import { requestTeas, postTea } from './utils/tea_api_utils';
import { fetchAllTeas} from './store/teaReducer';
import csrfFetch, { restoreSession } from './store/csrf';
import { loginUser, logoutUser } from './store/sessionReducer';

const initialState = {
  // teas: {
  //   1: {
  //     id: 1, flavor: 'green', price: 5.33
  //   }
  // }
};

// const testCreateuser = async () => {
//   let res = await fetch('/api/session');
//   let token = res.headers.get('X-CSRF-Token');

//   return fetch('/api/users', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: 'bobooo',
//       password: 'password'
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'X-CSRF-Token': token
//     }
//   })
// }
// window.testCreateuser = testCreateuser;

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
window.logoutUser = logoutUser;
//

const initializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

restoreSession().then(initializeApp);


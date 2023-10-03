import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { receiveTea, receiveTeas, removeTea, fetchTea, fetchTeas, postTea } from './store/teaReducer';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/userReducer';

//testing
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.fetchTea = fetchTea;
window.fetchTeas = fetchTeas;
window.postTea = postTea;
window.createUser = createUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
//

const initializeApp = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser')); 
  // ^ this was set in restoreSession ^
  let initialState = {};
  
  if (currentUser) {
    initialState = {
      users: {
        [currentUser.id]: currentUser
      },
      session: {
        id: currentUser.id
      }
    };
  };
  
  const store = configureStore(initialState);
  window.store = store;
  
  const Root = () => ( // note the implicit return
    <Provider store={store}>
      <App />
    </Provider>
    // The provider allows every child component access to the store
  )

  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

 // only initialize app after we've found if someone is logged in,
 // who they are, and we got our csrf token
restoreSession().then(initializeApp);

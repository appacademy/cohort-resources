import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';
import { createTea, fetchTeas, receiveTea, receiveTeas, removeTea, fetchTeaDetail } from './store/teaReducer'
import { postTea, requestTeas } from './utils/tea_api_util';
import { loginUser, logoutUser } from './store/userReducer'; 
import { restoreSession } from './store/csrf';



// ****** Different ************
const initializeApp = async () => {
  
  let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let initialState; 
  if (currentUser){
    initialState = {
      users: {
        [currentUser.id]: currentUser
      }
    }
  } else {
    initialState = {};
  }
  
  const store = configureStore(initialState);
  // ***************************
  
  //testing
  const blackTea = {
    id: 2,
    flavor: 'black tea',
    price: 3.5
  };
  
  const passionTea = {
    id: 3,
    flavor: 'passion tea',
    price: 4
  };
  
  const teas = {
    4: {
      id: 4, 
      flavor: 'Chai tea',
      price: 4
    },
    5: {
      id: 5,
      flavor: 'sencha',
      price: 6
    }
  };
  
  window.store = store;
  window.receiveTea = receiveTea;
  window.receiveTeas = receiveTeas;
  window.removeTea = removeTea;
  window.teas = teas;
  window.blackTea = blackTea;
  window.passionTea = passionTea;
  window.requestTeas = requestTeas;
  window.postTea = postTea;
  window.fetchTeas = fetchTeas;
  window.createTea = createTea;
  window.fetchTeaDetail = fetchTeaDetail;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
 
  //testing
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

// ****** Different ************
restoreSession().then(initializeApp)
// *****************************

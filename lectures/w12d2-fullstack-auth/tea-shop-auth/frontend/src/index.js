import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { fetchTeas, receiveTea, receiveTeas, removeTea } from './store/teasReducer';
import * as TeaApiUtils from './utils/teaApiUtils';
import { restoreSession } from './utils/authUtils';
import { deleteSession, postSession, postUser } from './utils/sessionApiUtils';
import { createUser, loginUser, logoutUser } from './store/usersReducer';

const root = ReactDOM.createRoot(document.getElementById('root'))
const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')

let initialState = {}
const currentUserData = JSON.parse(currentUser)

if (currentUserData) {
  initialState = {
    entities: {
      users: {
        [currentUserData.id]: currentUserData
      }
    },
    session: {
      currentUser: currentUserData.id
    }
  }
}

const store = configureStore(initialState)

const renderApp = () => {
  root.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App prop1={'hello'} prop2={'world'} />
      </Provider>
    // </React.StrictMode>
  )
}

if (!currentUser || !csrfToken) {
  restoreSession().then(renderApp)
} else {
  renderApp()
}

// for testing only
window.store = store
window.receiveTea = receiveTea
window.receiveTeas = receiveTeas
window.removeTea = removeTea
window.TeaApiUtils = TeaApiUtils
window.fetchTeas = fetchTeas
window.postUser = postUser
window.postSession = postSession
window.deleteSession = deleteSession
window.loginUser = loginUser
window.logoutUser = logoutUser
window.createUser = createUser
//
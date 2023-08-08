import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { fetchTeas, receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import * as TeaApiUtils from './utils/teaApiUtils';
import { restoreSession } from './utils/authUtils';
import { deleteSession, postSession, postUser } from './utils/sessionApiUtils';

const store = configureStore({
  session: {
    currentUser: 1
  }
})

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
//

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App prop1={'hello'} prop2={'world'} />
      </Provider>
    // </React.StrictMode>
  )
}

const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')

if (!currentUser || !csrfToken) {
  restoreSession().then(renderApp)
} else {
  renderApp()
}
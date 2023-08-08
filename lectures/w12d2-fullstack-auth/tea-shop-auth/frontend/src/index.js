import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { fetchTeas, receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import * as TeaApiUtils from './utils/teaApiUtils';

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
//

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App prop1={'hello'} prop2={'world'} />
    </Provider>
  // </React.StrictMode>
);


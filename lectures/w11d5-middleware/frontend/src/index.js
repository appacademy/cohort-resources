import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { receiveTea, receiveTeas, removeTea } from './store/teaReducer';

const store = configureStore({
  teas: {
    1: {
      id: 1,
      flavor: 'green',
      amount: '2',
      price: '14'
    }
  },
  users: {
    1: {
      id: 1,
      username: 'bob'
    }
  },
  session: {
    currentUser: 1
  }
})

// for testing only
window.store = store
window.receiveTea = receiveTea
window.receiveTeas = receiveTeas
window.removeTea = removeTea
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


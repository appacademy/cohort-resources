import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { receiveTea, receiveTeas, removeTea } from './store/teaReducer';

const store = configureStore({
  entities: {
    teas: {
      1: {
        id: 1,
        flavor: 'green',
        amount: 98,
        price: '14'
      }
    },
    users: {
      1: {
        id: 1,
        username: 'bob'
      }
    },
    transactions: {
      1: {
        id: 1,
        teaId: 1,
        userId: 1,
        quantity: 7
      }
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
      <App prop1={'hello'} prop2={'world'} />
    </Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { receiveTea, receiveTeas, removeTea, fetchAllTeas, createTea, fetchTeaDetail } from './store/teaReducer';
import { restoreSession } from './store/csrf';

const initialState = {
  // teas: {
  //   1: {
  //     id: 1, flavor: 'green', price: 5.33
  //   }
  // }
};

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
//

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

restoreSession().then(() => ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {receiveTea, receiveTeas, removeTea, fetchTeaDetail } from './store/teaReducer';
import { Provider } from 'react-redux';
import { requestTeas, postTea } from './utils/tea_api_utils';
import { fetchAllTeas} from './store/teaReducer';

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
window.requestTeas = requestTeas;
window.postTea = postTea;
window.fetchAllTeas = fetchAllTeas;
window.fetchTeaDetail = fetchTeaDetail;
//

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

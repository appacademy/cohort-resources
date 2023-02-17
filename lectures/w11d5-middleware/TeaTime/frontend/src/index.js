import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from "./store/index"
import { createTea, fetchAllTeas, receiveTea, receiveTeas, removeTea } from './store/teaReducer';
import './index.css';
import * as TeaApiUtil from './util/tea_api_util';

const initialState = {
  teas: {
    1:{
      id:1,
      flavor: "green",
      price: 3
    }
  }
};

const store = configureStore(initialState);

// testing
window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.TeaApiUtil = TeaApiUtil;
window.createTea = createTea;
window.fetchAllTeas = fetchAllTeas;
//

const Root = () => (
  <Provider store={store} >
    <App/>
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);

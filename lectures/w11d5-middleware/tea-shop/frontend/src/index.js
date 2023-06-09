import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { receiveTea, receiveTeas, removeTea, fetchAllTeas } from './store/teaReducer';
// import { requestTeas, createTea } from './util/tea_api_util';
import * as TeaAPIUtil from './util/tea_api_util';

const initialState = {
  teas: {
    1: {
      id: 1,
      flavor: "par",
      price: 5
    }
  }
}

const store = configureStore(initialState);

// -- just development
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;
window.requestTeas = TeaAPIUtil.requestTeas;
window.createTea = TeaAPIUtil.createTea;
window.fetchAllTeas = fetchAllTeas;
window.store = store;
// -- just development

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

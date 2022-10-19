import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import configureStore from './store';
import { receiveTea, receiveTeas, removeTea } from './store/teasReducer';

const initialState = {
  teas: {
    1: {
      id: 1,
      flavor: "green tea",
      price: 3.00
    }
  }
}

const store = configureStore(initialState)

window.store = store
window.receiveTea = receiveTea
window.receiveTeas = receiveTeas
window.removeTea = removeTea

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

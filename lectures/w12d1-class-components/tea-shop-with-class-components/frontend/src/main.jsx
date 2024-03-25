import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureStore from './store/index.js'
import { Provider } from 'react-redux';
import { createTea, destroyTea, fetchTea, fetchTeas } from './store/teaReducer.js'
import { deleteTea, getTea, getTeas, postTea } from './utils/teaApiUtils.js'

const initialState = {
};

const store = configureStore(initialState);
window.store = store;
window.getTeas = getTeas;
window.getTea = getTea;
window.postTea = postTea;
window.deleteTea = deleteTea;
window.fetchTeas = fetchTeas;
window.fetchTea = fetchTea;
window.createTea = createTea;
window.destroyTea = destroyTea;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
)


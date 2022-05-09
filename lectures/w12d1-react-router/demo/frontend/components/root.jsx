import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
      <App />
  </Provider>
);

export default Root;

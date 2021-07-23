import React from 'react';
import { Provider } from 'react-redux';
import App from './app'; // not created yet

const Root = (props) => (
  <Provider store={props.store}>
    <App />
  </Provider>
);

export default Root;
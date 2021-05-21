import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

// const Root = (props) => {
const Root = ({store}) => {
    return (
        // <Provider store={props.store}>
        <Provider store={store}>
            <App/>
        </Provider>
        // <h1>Hey Look our Tea Shop is open!!</h1>
    )
}
export default Root;
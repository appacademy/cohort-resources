import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/app';

const Root = (props) => {
    return (
        <Provider store={props.store}>
            {/* <h1>I'm in the root</h1> */}
            <App />
        </Provider>
    )
}

export default Root;
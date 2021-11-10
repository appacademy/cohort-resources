import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

// const Root = () => (
//     <div>
//         <h1>This is still our Tea Shop</h1>
//     </div>
// );

// const Root = (props) => ....
// props destructured below
// const Root = ({store}) => ....
const Root = ({ store }) => (
    <Provider store={store} >
        <App />
    </Provider>
);

export default Root;
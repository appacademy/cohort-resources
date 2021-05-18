import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const hello = React.createElement('h1', null, ['hello from react'])
    // const hello = <h1>hello from react!</h1>
    ReactDOM.render(<App name="Diego" otherProp="whatever"/>,root)
})
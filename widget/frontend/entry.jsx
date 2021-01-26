import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './widget';

// event listeners take 2 args: event, and the event callback
document.addEventListener('DOMContentLoaded', () => {
    const reactRoot = document.getElementById('react-root');
    // ReactDOM.render(<h1>Our first piece of React!!!!!!!</h1>,reactRoot);
    ReactDOM.render(<Widget />,reactRoot);
});

console.log('webpack is working yaaaaaaaaaaay');
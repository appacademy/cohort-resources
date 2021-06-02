import React from 'react';
import { HashRouter } from 'react-router-dom';
import CSSLecture from './css-lecture/css_lecture';

const App = ({ store }) => {
    return (
        <HashRouter>
                <CSSLecture />
        </HashRouter>
    );
};
export default App;
import React from 'react';
// import TeaIndex from './tea_index'; dont render the component! render the container!!!**
import TeaIndexContainer from './tea_index_container';

const App = () => {
    return (
        <>
            <h1>The Tea Shop Is Open</h1>
            <TeaIndexContainer/>
        </>
    )
}

export default App;
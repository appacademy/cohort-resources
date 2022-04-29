// This is going to be my singular parent component
import React from 'react';
import DogIndex from './dog_index';

const App = (props) => {
    return (
        <div className='app'>
            <h1>Popular Dogs</h1>
            <DogIndex />
        </div>
    )
}

export default App;
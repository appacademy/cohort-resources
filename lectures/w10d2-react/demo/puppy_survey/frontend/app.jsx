import React from 'react';
import DogIndex from './dog_index';

const App = (props) => {
  return (
    <div className='app'>
      <h1>Hello {props.name}, from React</h1>
      <h1>Popular Dogs!</h1>
      <DogIndex />
    </div>
  )
}

export default App;
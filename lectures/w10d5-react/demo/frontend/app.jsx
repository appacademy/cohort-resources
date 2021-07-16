import React from 'react';

import DogIndex from './dogIndex';

const App = (props) => {
  return (
    <div className="app">
      <h1>Popular Dogs!</h1>
      <DogIndex />
    </div>
  )
}

export default App;
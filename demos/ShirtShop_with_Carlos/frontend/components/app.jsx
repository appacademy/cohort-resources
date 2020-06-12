import React from 'react';
// import ShirtIndex from './shirts/shirt_index';
import ShirtIndexContainer from './shirts/shirt_index_container';
import ShirtFormContainer from "./shirts/shirt_form_container"
const App = (props) => {
  return (
    <>
      <h1>Carlos' Shirt Shop is Open for Business!</h1>
      <ShirtIndexContainer  />
      <ShirtFormContainer />
    </>
  );
};

export default App;
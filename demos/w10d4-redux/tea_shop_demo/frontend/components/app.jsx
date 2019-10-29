import React from 'react';
import TeaIndexContainer from '../components/tea_index_container';
import TeaFormContainer from '../components/tea_form_container';

const App = () => {
  return (
    <div>
      <h1>Tea Shop</h1>
      <TeaIndexContainer />
      <TeaFormContainer />
    </div>
  );
};

export default App;
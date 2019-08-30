import React from 'react';
// import TeaIndex from './tea_index';
import TeaIndexContainer from './tea_index_container';
import TeaFormContainer from './tea_form_container';

const App = (props) => {
  return (
    <div>
      <TeaIndexContainer />
      <TeaFormContainer />
    </div>
  );
};

export default App;
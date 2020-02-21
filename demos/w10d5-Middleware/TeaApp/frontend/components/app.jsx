import React from 'react';
import TeaListContainer from "./tea_list_container";
import TeaFormContainer from "./tea_form_container";

const App = (props) => {
  return (
    <div id="app-div">
      <TeaFormContainer />
      <TeaListContainer />
    </div>
  )
}

export default App
import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";

function App(props) {
  
  return (
    <>
      <NavBar  />
      <Route path='/:familyName'>
        <PostIndex  />
        {props.str}
      </Route>
    </>
  );
}

export default App;

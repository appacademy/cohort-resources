import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";
import Profile from './components/Profile';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App(props) {
  
  return (
    <>
      <NavBar  />
        <Switch>
          <Route path="/user/profile">
            <Profile />
          </Route>
          <Route path='/:familyName'>
            <PostIndex  />
          </Route>
        </Switch>

    </>
  );
}

export default App;

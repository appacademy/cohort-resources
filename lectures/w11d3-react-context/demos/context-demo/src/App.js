import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <>
      <NavBar/>
      <Route path='/:familyName'>
        <PostIndex />
      </Route>
    </>
  );
}

export default App;

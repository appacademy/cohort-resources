import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Route path='/:familyName'>
        <PostIndex loggedIn={loggedIn} />
      </Route>
    </>
  );
}

export default App;

import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";

function App() {
  const [loggedIn, setLogin] = useState(false);
  
  return (
    <>
      <NavBar loggedIn={loggedIn} setLogin={setLogin} />
      <Route path='/:familyName'>
        <PostIndex loggedIn={loggedIn} />
      </Route>
    </>
  );
}

export default App;

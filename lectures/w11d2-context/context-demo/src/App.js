import { useState} from 'react';
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";
import { SessionContext } from './context/sessionContext';

function App() {
  // const [loggedIn, setLogin] = useState(false);

  return (
    <>
      <NavBar/>
      {/* <SessionContext.Provider value={{fruit: 'apple'}}> */}
        <Route path='/:familyName'>
          <PostIndex/>
        </Route>
      {/* </SessionContext.Provider> */}
    </>
  );
}

export default App;

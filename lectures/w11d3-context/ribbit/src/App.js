import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostIndex from "./components/PostIndex";

function App() {

  return (
    <>
      <NavBar />
      <Route path={'/:familyName'} component={PostIndex} />
    </>
  );
}

export default App;

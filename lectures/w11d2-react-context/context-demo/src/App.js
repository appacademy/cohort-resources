import {Route} from "react"
import NavBar from './components/NavBar';
import PostIndex from './components/PostIndex';

function App() {
  return (
    <>
      <h1>Hello from new app</h1>
      <NavBar />
      {/* <PostIndex /> */}
      <Route path='/:familyName' component={PostIndex} />
    </>
  );
}

export default App;

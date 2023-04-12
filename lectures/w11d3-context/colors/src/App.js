import colorData from "./data/data.json"
import './App.css';
import ColorNav from "./colorNav";
import {Switch, Route} from 'react-router-dom';
import ColorShow from "./colorShow";
import TaylorForm from "./taylorForm";
import Image from "./image";


function App() {
  return (
  <>
  {/* <ColorNav colorData={colorData} /> */}

  <Switch>
    <Route exact  path="/">
      <TaylorForm/>
      <Image/>
    </Route>
    <Route path="/colors/:colorName">
      <ColorShow colorData={colorData}/>

    </Route>
  </Switch>
  </>
  );
}

export default App;

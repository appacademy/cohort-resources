import TeaIndex from "./components/TeaIndex";
import TeaForm from "./components/TeaForm";
import TeaShow from "./components/TeaShow";
import {NavLink, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <NavLink to="/teas/new" activeClassName="active">New Tea</NavLink>
      <NavLink exact to="/teas" activeClassName="active">All Teas</NavLink>
      <Switch>
        <Route path="/teas/new" component={TeaForm}/>
        <Route path="/teas/:teaId" component={TeaShow}/>
        <Route path="/teas" component={TeaIndex}/>
      </Switch>
    </>
  );
}

export default App;

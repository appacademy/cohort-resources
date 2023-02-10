import JobIndex from "./components/JobIndex";
import { Route, Switch, Redirect } from 'react-router-dom';
import JobShow from "./components/JobShow";

function App(props) {
  return (
    <div className="app">
      {/* <JobIndex /> */}
      <JobIndex />
      <Switch>
        <Route path="/error" render={() => <h1>404 This page does not exist :(</h1>}/>
        <Route path="/jobs/:jobId" component={JobShow}/>
        <Route exact path='/'>
          <h1>Hello {props.name} from App</h1>
        </Route>
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;

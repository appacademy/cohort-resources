import JobIndex from "./components/JobIndex/JobIndex";
import {Route, Switch, Redirect} from 'react-router-dom';
import JobShow from "./components/JobShow/JobShow";


function App(props) {
  console.log(props)
  const {userObj} = props; //object deconstruction
  const {name} = userObj; 
  return (
    <div className="app">
      <JobIndex />
      <Switch>
        <Route path='/error' render={()=> <h1>ERROR</h1>}/>
        <Route path='/jobs/:jobId' component={JobShow}/>
        {/* <Route path='/jobs' component={JobIndex}/> */}
        <Route exact path='/' render={()=> <h1>Hello, {name}, {props.age}</h1>}/>
        <Redirect to='/error' />
      </Switch>
      
    </div>
  );
}

export default App;

import React from 'react'
import JobIndex from './components/jobIndex';
import {Switch, Route, Redirect} from 'react-router-dom';
import JobShow from './components/jobShow';
import Error from './components/Error';

// const App = (props) => {
function App (props) {
  return (
    <div className="app">
      <h1>Hello {props.name}! I'm App</h1>
      <JobIndex />
      <Switch>
        <Route path="/error" component={Error} />
        <Route path="/jobs/:jobId" component={JobShow}/>
        {/* <Route path="/jobs" component={JobIndex} /> */}
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;

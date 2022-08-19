import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import JobIndex from '../jobIndex';
import JobShow from '../jobShow';
import NavBar from '../navBar';

function App(props) {
  console.log('App props:', props);
  
  return (
      <div className="app">
        <h1>So you're looking for a job eh?</h1>
        <NavBar />
        <Switch>
          <Route path='/jobs/:jobId' component={JobShow} />
          <Route path='/:indexType' component={JobIndex} />
          <Redirect to='/home' />
        </Switch>
      </div>
  );
}

export default App;

import React from 'react';
import TodoIndexContainer from './todo_index/todo_index_container';
import TodoFormContainer from './todo_index/todo_form_container';
import TodoShowContainer from './todo_index/todo_show_container';
import Error from './error';
import Header from './header';
import Home from './home';
// importing Route and Switch
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
  <div className="app">
    <Header />
    {/* <Home />
    <TodoFormContainer />
    <TodoIndexContainer /> */}

    {/* 
      Switch statements will only render the FIRST Route that matches
      For this reason, it is good practice to order these from most
      specific to least specific paths as below
    */}
    <Switch>
      <Route path='/todo/:id' component={TodoShowContainer} />
      <Route path='/todos/new' component={TodoFormContainer} />
      <Route path='/todos' component={TodoIndexContainer} />
      <Route exact path='/' component={Home} />
      <Route path='/error' component={Error} />
      <Redirect to='/error' />
    </Switch>
  </div>
);

export default App;

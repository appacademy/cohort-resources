import React from 'react';
import TodoIndexContainer from './todo_index/todo_index_container';
import TodoFormContainer from './todo_index/todo_form_container';
import TodoShowContainer from './todo_index/todo_show_container';
import Error from './error';
import Header from './header';
import Home from './home';

import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/todos/new" component={TodoFormContainer} />
      <Route path="/todos/:todoId" component={TodoShowContainer} />
      <Route path="/todos" component={TodoIndexContainer} />
      <Route exact path="/" component={Home} />
      <Route path="/error" component={Error} />
      <Redirect to="/error" />
    </Switch>
    
  </div>
);

export default App;

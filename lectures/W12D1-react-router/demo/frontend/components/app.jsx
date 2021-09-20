import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodoIndexContainer from './todo_index/todo_index_container';
import TodoFormContainer from './todo_index/todo_form_container';
import TodoShowContainer from './todo_index/todo_show_container';
import Error from './error';
import Header from './header';
import Home from './home';

const App = () => (
  <div className="app">
    <Header />

    <Switch> {/* order by most specific to least specific! */}
      <Route path='/todos/new' component={TodoFormContainer}/>
      <Route path='/todos/:id' component={TodoShowContainer}/>
      <Route path='/todos' component={TodoIndexContainer}/>
      <Route path='/error' component={Error}/>
      <Route exact path='/' component={Home}/>
      <Redirect to='/error'/>
    </Switch>

    {/* <Home />
    <TodoFormContainer />
    <TodoIndexContainer /> */}
  </div>
);

export default App;

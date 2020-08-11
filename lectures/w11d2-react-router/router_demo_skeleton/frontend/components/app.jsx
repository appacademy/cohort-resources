import React from 'react';
import TodoIndexContainer from './todo_index/todo_index_container';
import TodoFormContainer from './todo_index/todo_form_container';
import TodoShowContainer from './todo_index/todo_show_container';
import Error from './error';
import Header from './header';
import Home from './home';

import { Route, Switch, Redirect } from 'react-router-dom';

// exact prop/flag makes it so the path has to match exactly for that component to render. no more, no less
// if using Switch, you should have more general paths on the bottom, more specific on top
// add wildcards to routes with : (example: :id)

// Components being rendered by a Route component get passed match, location, history as props. This includes container components.
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path='/todos/new' component={TodoFormContainer}/>
      <Route path='/todos/:id' component={TodoShowContainer}/>
      <Route path='/todos' component={TodoIndexContainer}/>
      <Route exact path='/' component={Home}/>
      <Route path='/error' component={Error}/>
      <Redirect to='/error' /> {/* Sort of like a catch all */}
    </Switch>
  </div>
);

export default App;

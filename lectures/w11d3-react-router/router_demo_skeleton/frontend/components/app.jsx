import React from 'react';
import TodoIndexContainer from './todo_index/todo_index_container';
import TodoFormContainer from './todo_index/todo_form_container';
import Header from './header';
import Home from './home';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodoShowContainer from './../components/todo_index/todo_show_container';
import Error from './error';



const App = () => (
  <div className="app">
    <Header />
    {/* <Route exact path="/" component={Home} render={()=> <h1>We are in home</h1>}/> */}
    {/* <Route exact path="/" component={Home}/>
    <Route path="/todos/new" component={TodoFormContainer}/>
    <Route exact path="/todos" component={TodoIndexContainer}/> */}
    <Switch>  
      {/* /todos */}
      <Route path="/todos/new" component={TodoFormContainer}/>
      <Route path="/todos/:id" component={TodoShowContainer} />
      <Route path="/todos" component={TodoIndexContainer}/>
      <Route path="/error" component={Error} />
      <Route exact path="/" component={Home}/>
      <Redirect to="/error" />
    </Switch>
    {/* <Home />
    <TodoFormContainer />
    <TodoIndexContainer /> */}
  </div>
);

export default App;

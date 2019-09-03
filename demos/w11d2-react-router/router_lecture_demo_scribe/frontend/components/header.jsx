import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>Super Awesome Todo List</h1>
      <NavLink to="/" exact className="button" activeClassName="curr">Home</NavLink>
      <NavLink to="/todos" exact className="button" activeClassName="curr">To Do's</NavLink>
      <NavLink to="/todos/new" exact className="button" activeClassName="curr">New To Do</NavLink>
    </header>
  );
};

export default withRouter(Header);

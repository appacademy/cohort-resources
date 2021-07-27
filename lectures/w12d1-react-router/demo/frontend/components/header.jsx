import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderDetailContainer from './header_detail/header_detail_container';

const Header = (props) => {

  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <NavLink className="button" activeClassName="curr" exact to="/">Home</NavLink>
      <NavLink className="button" activeClassName="curr" exact to="/todos">Todos</NavLink>
      <NavLink className="button" activeClassName="curr" exact to="/todos/new">New Todo</NavLink>
      <HeaderDetailContainer/>
    </header>
  );
};

export default Header;

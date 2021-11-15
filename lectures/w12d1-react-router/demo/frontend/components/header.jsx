import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderDetailContainer from './header_detail/header_detail_container';

const Header = (props) => {

  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      {/* <Link className="button" to="/">Home</Link>
      <Link className="button" to="/todos">Todos</Link>
      <Link className="button" to="/todos/new">New Todo</Link> */}
      <NavLink exact={true} activeClassName="curr" className="button" to="/">Home</NavLink>
      <NavLink exact={true} activeClassName="curr" className="button" to="/todos">Todos</NavLink>
      <NavLink exact={true} activeClassName="curr" className="button" to="/todos/new">New Todo</NavLink>
      <HeaderDetailContainer/>
    </header>
  );
};

export default Header;

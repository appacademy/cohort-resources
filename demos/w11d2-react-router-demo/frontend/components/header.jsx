import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className='sub-header'>[ Header Component ]</h3>
      <NavLink exact className="button" activeClassName="curr" to="/">
        Home
      </NavLink>
      <NavLink exact className="button" activeClassName="curr" to="/todos">
        All Todos
      </NavLink>
      <NavLink exact className="button" activeClassName="curr" to="/todos/new">
        New Todo
      </NavLink>
    </header>
  );
};

export default Header;

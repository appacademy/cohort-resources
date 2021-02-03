import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      {/* <Link to="/" className="button">Home</Link>
      <Link to="/todos" className="button">Todos</Link>
      <Link to="/todos/new" className="button">New Todo</Link> */}
      <NavLink exact to="/" activeClassName="curr" className="button">Home</NavLink>
      <NavLink exact to="/todos" activeClassName="curr" className="button">Todos</NavLink>
      <NavLink to="/todos/new" activeClassName="curr" className="button">New Todo</NavLink>

      <h1>We are in {props.location.pathname}</h1>
    </header>
  );
};

export default withRouter(Header);

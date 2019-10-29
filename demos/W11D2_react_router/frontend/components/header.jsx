import React from 'react';
import {Link, withRouter, NavLink} from 'react-router-dom';

const Header = (props) => {

  debugger
  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className='sub-header'>[ Header Component ]</h3>
      <NavLink exact activeClassName="curr" className="button" to="/"> Home </NavLink>
      <NavLink exact activeClassName="curr" className="button" to="/todos"> todos </NavLink>
      <NavLink exact activeClassName="curr" className="button" to="/todos/new"> New Todo </NavLink>
    </header>
  );
};

export default withRouter(Header);
// export default Header;

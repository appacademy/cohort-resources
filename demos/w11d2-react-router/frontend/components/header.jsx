import React from 'react';
import HeaderDetailContainer from './header_detail/header_detail_container';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>

      <NavLink exact to='/' className='button' activeClassName='curr'>Home</NavLink>
      <NavLink exact={true} to='/todos' className='button' activeClassName='curr'>Todos</NavLink>
      <NavLink exact to='/todos/new' className='button' activeClassName='curr'>New Todo</NavLink>

      <HeaderDetailContainer
        parent={props.parent}
        banana="banana"
        apple="apple"
      />
    </header>
  );
};

export default Header;

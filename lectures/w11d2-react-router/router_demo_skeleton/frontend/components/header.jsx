import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderDetailContainer from './header_detail/header_detail_container';

const Header = (props) => {

  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <NavLink exact to='/' className='button' activeClassName='curr' >Home</NavLink>
      <NavLink exact to='/todos' className='button' activeClassName='curr' >Take me todos</NavLink>
      <NavLink exact to='/todos/new' className='button' activeClassName='curr' >Take me to newdos</NavLink>
      <HeaderDetailContainer/>
    </header>
  );
};

export default Header;

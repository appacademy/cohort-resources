import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HeaderDetailContainer from './header_detail/header_detail_container';

const Header = (props) => {
  //clicking on a link or rendering a Redirect component
  // calls history.push('/path')
  return (
    <header>
      <h1> Super-Cool-Todo-List Single Page App! </h1>
      <h3 className="sub-header">[ Header Component ]</h3>
      <NavLink exact activeClassName='curr' className='button' to='/'>Home</NavLink>
      <NavLink exact activeClassName='curr' className='button' to='/todos'>Todos</NavLink>
      <NavLink exact activeClassName='curr' className='button' to='/todos/new'>New Todo</NavLink>
      <HeaderDetailContainer/>
    </header> 
  );
};

export default Header;

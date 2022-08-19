import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  console.log('NavBar props:', props);

  return (
    <div>
      <NavLink exact to='/home' className='nav-link'>
        Home
      </NavLink>
      <NavLink exact to='/saved' className='nav-link'>
        Saved
      </NavLink>
      <NavLink exact to='/applied' className='nav-link'>
        Applied
      </NavLink>
    </div>
  )
};

export default NavBar;
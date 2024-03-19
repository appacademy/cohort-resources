import { Link, NavLink, Outlet } from 'react-router-dom';
import './NavBar.css';

import Logo from '../assets/frog.png';
import { useState } from 'react';
import { useSessionContext } from '../contexts/sessionContext';

const NavBar = props => {
  const { loggedIn, setLoggedIn, currentUser, setCurrentUser } = useSessionContext();

  const [user, setUser] = useState({
    username: '',
    email: ''
  });

  const handleChange = field => e => {
    setUser(old => ({ ...old, [field]: e.target.value }));
  };

  const handleSubmit = e => {
    setLoggedIn(true);
    setCurrentUser(user);
    setUser({
      username: '',
      email: ''
    });
    e.preventDefault();
  };

  const handleLogout = e => {
    setLoggedIn(false);
    setCurrentUser({
      username: '',
      email: ''
    });
  };

  const sessionInfo = () => {
    if (loggedIn) {
      return (
        <>
          <p>Hello {currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )
    } else {
      return (
      <form onSubmit={handleSubmit}>
        <input placeholder='Username' value={user.username} onChange={handleChange('username')}></input>
        <input placeholder='Email' value={user.email} onChange={handleChange('email')}></input>
        <input type='submit' value={'Log In'}></input>
      </form>
      )
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <div className='home'>
          <img className='logo' src={Logo} />
          <h2>Ribbit</h2>
        </div>
      </Link>
      <NavLink to={'/frogs'}>Frogs</NavLink>
      <NavLink to={'/salamanders'}>Salamanders</NavLink>
      <NavLink to={'/newts'}>Newts</NavLink>
      <NavLink to={'/caecilians'}>Caecilians</NavLink>
      {sessionInfo()}
    </div>
  );
};

export default NavBar;
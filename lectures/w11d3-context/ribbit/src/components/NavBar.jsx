import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logoImg from '../assets/logo.jpeg';
import { useState } from "react";
import { useSessionContext } from "../context/sessionContext";

const NavBar = props => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState({});
  const { loggedIn, setLoggedIn, currentUser, setCurrentUser } = useSessionContext();

  const clickHandler = e => {
    e.preventDefault();
    if (loggedIn) {
      setCurrentUser({});
    } else {
      setCurrentUser({ name: 'Darren' });
    }
    setLoggedIn(oldValue => !oldValue);
  };

  return(
    <>
      <div className="main-header">
        <Link to="/" className="logo">
          <img src={logoImg} className="logo-img" alt=""/>
          <p>RIBBIT</p>
        </Link>
        <div>
          <p>The Front Page of the Swamp</p>
        </div>
        <div className="session-buttons">
          {!loggedIn && (
            <button onClick={clickHandler}>Log In</button>
          )}
          {loggedIn && (
            <>
              <p>Welcome {currentUser.name}</p>
              <button onClick={clickHandler}>Log Out</button>
            </>
          )}
        </div>
      </div>
      <div className="sub-nav-bar">
        <ul className="nav-links">
          <li><NavLink to='/caecilians'>Caecilians</NavLink></li>
          <li><NavLink to='/frogs'>Frogs</NavLink></li>
          <li><NavLink to='/newts'>Newts</NavLink></li>
          <li><NavLink to='/salamanders'>Salamanders</NavLink></li>
          <li><NavLink to='/toads'>Toads</NavLink></li>
        </ul>
      </div>
    </>
  )
};

export default NavBar;
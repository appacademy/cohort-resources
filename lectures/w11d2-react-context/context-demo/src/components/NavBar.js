import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import logoImg from '../../assets/logo.jpeg';

const NavBar = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleClick = e => {
    e.preventDefault();
    if (loggedIn) {
      setCurrentUser({});
      setLoggedIn(false);
    } else {
      setCurrentUser({ name: 'Mike' });
      setLoggedIn(true);
    }
  }

  return (
    <>
      <div className="main-header">
        <Link to="/" className="logo">
          <img src={logoImg} className="logo-img" />
          <p>RIBBIT</p>
        </Link>
        <div>
          <p>The Front Page of the Swamp</p>
        </div>
        <div className="session-buttons">
          {!loggedIn && (
            <button onClick={handleClick}>Log In</button>
          )}
          {loggedIn && (
            <>
              <p>Welcome {currentUser.name}!</p>
              <button onClick={handleClick}>Log Out</button>
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
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { SessionContext } from "../context/SessionContext";
import { useSessionContext } from "../context/SessionContext";



const NavBar = () => {
  const {loggedIn, setLogin, currentUser, setCurrentUser} = useSessionContext();

  const handleClick = e => {
    e.preventDefault();
    if (loggedIn) {
      setCurrentUser({});
      setLogin(false);
    } else {
      setCurrentUser({ name: 'Mike' });
      setLogin(true);
    }
  }
  
  const button = loggedIn ? (
    <>
      <p>Welcome {currentUser.name}!</p>
      <button onClick={handleClick}>Log Out</button>
    </>
  ) : (
      <button onClick={handleClick}>Log In</button>
  )

  return (
    <>
      <div className="main-header">
        <Link to="/" className="logo">
          <p>RIBBIT</p>
        </Link>
        <div>
          <p>The Front Page of the Swamp</p>
        </div>
        <div className="session-buttons">
          {button}
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
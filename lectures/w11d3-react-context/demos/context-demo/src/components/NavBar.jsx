import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSessionContext } from "./context/sessionContext";


const NavBar = () => {
  // const [loggedIn, setLogin] = useState(false);
  // const {loggedIn, setLoggedIn} = useContext(SessionContext)
  const {loggedIn, setLoggedIn} = useSessionContext()
  const [currentUser, setCurrentUser] = useState({});

  console.log("loggedIn:", loggedIn)

  const handleClick = e => {
    e.preventDefault();
    if (loggedIn) {
      setCurrentUser({});
      setLoggedIn(false);
    } else {
      setCurrentUser({ name: 'Paulo' });
      setLoggedIn(true);
    }
  }
  
  const button = loggedIn ? (
    <>
      <p>Welcome back {currentUser.name}!</p>
      <button onClick={handleClick}>Log Out</button>
    </>
  ) : (
      <button onClick={handleClick}>Log In</button>
  )

  return (
    <div className="nav-bar">
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
    </div>
  )
};

export default NavBar;
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SessionContext, useSessionContext } from "../context/sessionContext";

const NavBar = (props) => {
  // const [loggedIn, setLogin] = useState(false);
  // const {loggedIn, setLogin} = props;
  const {loggedIn, setLogin} = useSessionContext(); //custom hook return the provider's value
  const [currentUser, setCurrentUser] = useState({});

  console.log(loggedIn)

  const handleClick = e => {
    e.preventDefault();
    if (loggedIn) { //logging out scenario
      setCurrentUser({});
      setLogin(false);
    } else { //logging in scenario
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
        {/* <SessionContext.Consumer> */}
          {/* {(value) => <h2>I like the fruit {value.fruit}</h2>} */}
        {/* </SessionContext.Consumer> */}
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/sessionReducer";

const Session = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.currentUser ? state.users[state.session.currentUser] : null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
    setUsername('');
    setPassword('');
  };

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logoutUser(currentUser.id));
  }

  return (
    <>
    {currentUser &&
      <>
        <h4>Greetings {currentUser.username}</h4>
        <form onSubmit={handleLogout}>
          <input type="submit" value="Log Out" />
        </form>
      </>
    }
    {!currentUser &&
      <>
        <h4>Sign In Plez</h4>
        <form onSubmit={handleLogin}>
          <input type='text' placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
          <input type='password' placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <input type="submit" value="Log In" />
        </form>
      </>
    }
    </>
  )
};

export default Session;
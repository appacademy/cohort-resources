import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectCurrentUser } from '../store/sessionReducer';
import './NavBar.css';
import { useState } from 'react';
import SessionModal from './SessionModal';

const NavBar = props => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [modalState, setModalState] = useState(null);

  const sessionLinks = () => {
    if (currentUser) {
      return (
        <span className='session-links'>
          <p>Hello {currentUser.username}</p>
          <button onClick={() => dispatch(logoutUser())}>
            Logout
          </button>
        </span>
      )
    } else {
      return (
        <span className='session-links'>
          <button onClick={() => setModalState('signup')}>Signup</button>
          <button onClick={() => setModalState('login')}>Login</button>
        </span>
      )
    }
  }

  return (
    <>
      <nav className='nav-bar'>
        <h1>AuthDemo</h1>
        {sessionLinks()}
      </nav>
      {modalState && (
        <SessionModal
          modalState={modalState}
          setModalState={setModalState}
        />
      )}
    </>
  );
};

export default NavBar;
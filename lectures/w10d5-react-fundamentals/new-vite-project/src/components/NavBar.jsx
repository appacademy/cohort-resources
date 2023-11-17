import './NavBar.css';
import jobBoardLogo from '../assets/jobBoardLogo.jpg';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = props => {
  return (
    <>
      <nav className='nav'>
        <img src={jobBoardLogo} className='logo'></img>
        <h2>Darren's Job Board</h2>
        <NavLink to={'/jobs'}>Job Index</NavLink>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;
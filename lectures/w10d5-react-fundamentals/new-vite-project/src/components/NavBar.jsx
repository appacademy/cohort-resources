import './NavBar.css';
import jobBoardLogo from '../assets/jobBoardLogo.jpg';

const NavBar = props => {
  return (
    <nav className='nav'>
      <img src={jobBoardLogo} className='logo'></img>
      <h2>Darren's Job Board</h2>
    </nav>
  )
};

export default NavBar;
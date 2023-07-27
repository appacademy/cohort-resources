import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <div className='header'>
      <Link to={'/'}><img src={props.logo} /></Link>
      <h1>Super Cool Job Board</h1>
    </div>
  )
};

export default Header;
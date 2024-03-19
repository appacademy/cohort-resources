import { Outlet } from 'react-router-dom';
import './Layout.css';
import NavBar from './NavBar';

const Layout = props => {
  return (
    <div className='layout'>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
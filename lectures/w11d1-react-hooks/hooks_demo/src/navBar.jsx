import {Outlet, Link} from 'react-router-dom';
export default function NavBar() {
    

    return (
        <>
        <header className='nav-bar'>
         <div className="nav-left">App Academy</div>
         <div className="nav-right">
             <Link to="/counter">Counter</Link>
             <Link to="/students">Roster</Link>
             <Link to="/form">Form</Link>
         </div>
        </header>
         <Outlet/>
        
        </>
    )
}

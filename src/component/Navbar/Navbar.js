import { NavLink } from 'react-router-dom';
import logo from './cinema-logo.png'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="topnav">
            <div className="left-links">
                <NavLink to="/" exact activeClassName="active">
                    <img src={logo} className='topnav-logo' />
                </NavLink>
            </div>

            <div className="right-links">
                <NavLink to="/booking" activeClassName="active">Đặt vé</NavLink>
                <NavLink to="/film" activeClassName="active">Phim</NavLink>
                <NavLink to="/category" activeClassName="active">Thể loại</NavLink>
                <NavLink to="/profile" activeClassName="active">Cá nhân</NavLink>
            </div>
        </div>
    )
}

export default Navbar;
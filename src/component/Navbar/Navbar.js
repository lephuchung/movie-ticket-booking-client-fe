import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.scss';
import useMediaQuery from '../../customHook/useMediaQuery';
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from 'react';

const Navbar = ({ isSignedIn, setIsSignedIn }) => {
    const isMobile = useMediaQuery('(max-width: 570px)');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <div className="topnav">
            <div className="left-links">
                <NavLink to="/" exact activeClassName="active" onClick={handleMenuClose} className="topnav-logo-button">
                    <img src={logo} alt="Logo" className="topnav-logo" />
                </NavLink>
            </div>

            {isMobile && (
                <div className="navbar-menu-mobile-icon" onClick={toggleMenu}>
                    {menuOpen
                        ? <IoIosClose className='navbar-menu-icon' />
                        : <IoMenu className='navbar-menu-icon' />
                    }
                </div>
            )}

            {menuOpen && <div className="overlay" onClick={handleMenuClose}></div>}

            <div className={`right-links ${isMobile && menuOpen ? 'show' : ''}`}>
                <NavLink to="/booking" activeClassName="active" onClick={handleMenuClose}>
                    Đặt vé
                </NavLink>
                <NavLink to="/film" activeClassName="active" onClick={handleMenuClose}>
                    Phim
                </NavLink>
                <NavLink to="/category" activeClassName="active" onClick={handleMenuClose}>
                    Thể loại
                </NavLink>
                {isSignedIn
                    ? <NavLink to="/profile" activeClassName="active" onClick={handleMenuClose}>
                        Cá nhân
                    </NavLink>
                    : <NavLink to="/login" activeClassName="active" onClick={handleMenuClose}>
                        Đăng nhập
                    </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;
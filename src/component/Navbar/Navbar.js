import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="topnav">
            <NavLink to={'/'}>Trang chủ</NavLink>
            <NavLink to={"/booking"}>Đặt vé</NavLink>
            <NavLink to={"/film"}>Phim</NavLink>
            <NavLink to={"/category"}>Thể loại</NavLink>
            <NavLink to={"/profile"}>Cá nhân</NavLink>
        </div>
    )
}

export default Navbar;
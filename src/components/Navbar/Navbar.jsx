import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className='text-primary'><Link to="/" className="nav-link">Home</Link></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/countries" className="nav-link">Countries</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
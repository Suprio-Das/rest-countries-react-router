import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}>Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/countries">Countries</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
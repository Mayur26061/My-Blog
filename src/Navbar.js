import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Add New</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;

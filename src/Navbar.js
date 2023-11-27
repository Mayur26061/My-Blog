import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                {/* <a href="/">Home</a> */}
                {/* <a href="/create">Add New</a> */}
                <NavLink to="/test">Add New</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;

import { Link, NavLink } from "react-router-dom";

/**
 * NavBar component links to Companies, Jobs, Home
 *
 * Props: none
 * State: none
 *
 * App-> NavBar
 */

//Can use navlink component
function NavBar({logout}) {
    const { user } = useContext(userContext);
    return (
        <div className="Navbar">

            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link className="Home nav-link" to="/">Jobly</Link>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <NavLink className="Companies nav-link" to="/companies">Companies</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="Jobs nav-link" to="/jobs">Jobs</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="Jobs nav-link" onclick={logout}>Profile</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="Jobs nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="Jobs nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink className="Jobs nav-link" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
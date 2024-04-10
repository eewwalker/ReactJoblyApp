import { Link } from "react-router-dom";

/**
 * NavBar component links to Companies, Jobs, Home
 *
 * Props: none
 * State: none
 *
 * App-> NavBar
 */
function NavBar() {
    return (
        <div className="Navbar">

            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link className="Home nav-link" to="/">Jobly</Link>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <Link className="Companies nav-link" to="/companies">Companies</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="Jobs nav-link" to="/jobs">Jobs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;
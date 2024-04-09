import { Link } from "react-router-dom";

function NavBar() {
    return(
    <div className="navbar">
        <Link className="home-link" to="/">Jobly</Link>
        <Link className="companies" to="/companies">Companies</Link>
        <Link className="jobs" to="/jobs">Jobs</Link>
    </div>
    )
}


export default NavBar;
import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./User/userContext";

/**
 * Home component renders our home page
 *
 * Props: none
 * State: none
 *
 * App-> RoutesList -> Homepage
 */
function Homepage() {
    const { user } = useContext(userContext);
    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 fw-bold">Jobly</h1>
                <p className="lead">All the jobs in one, convenient place.</p>
                {user ? <h2>Welcome Back, {user.firstName} </h2> :
                    <div>
                        <Link className="btn btn-primary fw-bold me-3" to="/login">Log in</Link>
                        <Link className="btn btn-primary fw-bold" to="/signup">Sign up</Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Homepage;;
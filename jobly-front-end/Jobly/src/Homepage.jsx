import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./User/userContext";
import './Homepage.css';
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
                {user ? <h2>Welcome Back, {user.firstName} </h2> :
                    <>
                        <h1 className="mb-4 fw-bold">Jobly</h1>
                        <h2 className="lead mb-3">All the jobs in one, convenient place.</h2>
                    </>
                }
            </div>
        </div>
    );
}

export default Homepage;;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * Login component renders form for user login
 *
 * Props: none
 * State: loginUser { username, password}
 *
 * App-> RoutesList -> LoginForm
 */


function LoginForm({ loginUser }) {
    const initialData = { username: '', password: '' };
    const [loginUserData, setloginUserData] = useState(initialData);
    const navigate = useNavigate();

    /** Update user information to state  */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setloginUserData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    /** handleLogin, send userData to parent and set values to initialData */
    function handleLogin(evt) {
        evt.preventDefault();
        loginUser(loginUserData);
        setloginUserData(initialData);
        navigate("/");

    }
    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Log In</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input className="form-control"
                                    id="username"
                                    name="username"
                                    value={loginUserData.username}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input className="form-control"
                                    id="password"
                                    name="password"
                                    value={loginUserData.password}
                                    onChange={handleChange} />
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
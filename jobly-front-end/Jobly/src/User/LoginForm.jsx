import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
/**
 * Login component renders form for user login
 *
 * Props: loginUser
 * State:
 * -loginUserData { username, password}
 * -errors [error msg..]
 *
 * App-> RoutesList -> LoginForm-> Alert
 */


function LoginForm({ loginUser }) {
    const initialData = { username: '', password: '', errors: null };


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
    async function handleLogin(evt) {
        evt.preventDefault();
        try {
            const { errors, ...rest } = loginUserData;

            await loginUser(rest);
            navigate("/");
            setloginUserData(initialData);

        } catch (err) {
            setloginUserData(data => ({
                ...data,
                errors: err
            }));
        }

    }
    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
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
                            {loginUserData.errors ?
                                loginUserData.errors.map((e, i) => <Alert key={i} message={e} type={"danger"} />)
                                : null}
                            <div className="d-grid">
                                <button className="btn btn-secondary">
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
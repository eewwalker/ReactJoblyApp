import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";

/**
 * SignUp component renders form for user signp
 *
 * Props: signupUser()
 * State: signUpUser { username, password, firstName, lastName, email, errors}
 *
 * App-> RoutesList -> SignupForm
 */

function SignupForm({ signupUser }) {
    const initialData = { username: '', password: '', firstName: '', lastName: '', email: '', errors: null };

    const [signUpUserData, setsignUpUserData] = useState(initialData);

    const navigate = useNavigate(null);

    /** Update user information to state  */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setsignUpUserData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    /** handleSignup, send userData to parent and set values to initialData */
    async function handleSignup(evt) {
        evt.preventDefault();
        try {
            const { errors, ...rest } = signUpUserData;

            await signupUser(rest);
            navigate("/");
            setsignUpUserData(initialData);

        } catch (err) {
            setsignUpUserData(data => ({
                ...data,
                errors: err
            }));
        }

    }
    return (
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-5">
                <h2 className="mb-3">Sign Up</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSignup}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input className="form-control"
                                    id="username"
                                    name="username"
                                    value={signUpUserData.username}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input className="form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={signUpUserData.password}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={signUpUserData.firstName}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={signUpUserData.lastName}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-control"
                                    id="email"
                                    name="email"
                                    value={signUpUserData.email}
                                    onChange={handleChange} />
                            </div>
                            {signUpUserData.errors ?
                                signUpUserData.errors.map((e, i) => <Alert key={i} message={e} type={"danger"} />)
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

export default SignupForm;
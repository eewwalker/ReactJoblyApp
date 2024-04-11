import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Error";

/**
 * SignUp component renders form for user signp
 *
 * Props: signupUser()
 * State: signUpUser { username, password, firstName, lastName, email}, error[]
 *
 * App-> RoutesList -> SignupForm
 */

function SignupForm({ signupUser }) {
    const initialData = { username: '', password: '', firstName: '', lastName: '', email: '' };

    const [signUpUserData, setsignUpUserData] = useState(initialData);
    const [errors, setErrors] = useState(null);

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
            await signupUser(signUpUserData);
            navigate("/");
            setsignUpUserData(initialData);
        } catch (err) {
            setErrors(err);
        }

    }
    return (
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
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
                            {errors ?
                                errors.map((e, i) => <Error key={i} error={e} />)
                                : null}
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

export default SignupForm;
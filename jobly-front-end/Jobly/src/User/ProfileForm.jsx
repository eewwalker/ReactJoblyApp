
import userContext from "./userContext";
import { useContext } from "react";


function ProfileForm() {
    return (
        <div className="ProfileForm">
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
                            <div className="d-grid">
                                <button className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileForm;
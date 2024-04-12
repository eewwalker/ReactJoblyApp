
import { useState } from "react";
import userContext from "./userContext";
import { useContext } from "react";
import Alert from "../Alert";

/**
 * ProfileForm component renders form for user update
 *
 * Props: updateUser
 * State:
 * -updateUserData {username:"", firstName:"", lastName:"", email:"", errors:[], success:false}
 *
 * App-> RoutesList -> ProfileForm => Alert
 */
function ProfileForm({ updateUser }) {
    const { user } = useContext(userContext);
    const initialData = { username: user.username, firstName: user.firstName, lastName: user.lastName, email: user.email, errors: null, success: false };
    const [updateUserData, setUpdateUserData] = useState(initialData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setUpdateUserData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    /** handleSignup, send userData to parent and set values to initialData */
    async function handleUpdateUser(evt) {
        evt.preventDefault();
        try {
            const { errors, success, ...rest } = updateUserData;
            console.log(rest, "UpdataUserDAta");
            await updateUser(rest);
            setUpdateUserData(data => ({
                ...data,
                success: true
            }));

        } catch (err) {
            console.log(err);
            setUpdateUserData(data => ({
                ...data,
                errors: err
            }));
        }

    }
    return (
        <div className="ProfileForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Profile</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleUpdateUser}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input disabled className="form-control"
                                    id="username"
                                    name="username"
                                    value={updateUserData.username}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={updateUserData.firstName}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={updateUserData.lastName}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-control"
                                    id="email"
                                    name="email"
                                    value={updateUserData.email}
                                    onChange={handleChange} />
                            </div>
                            {updateUserData.errors ?
                                updateUserData.errors.map((e, i) => <Alert key={i} message={e} type={"danger"} />)
                                : null}

                            {updateUserData.success && !updateUserData.errors
                                ?
                                <Alert message="Updated Successfully" type={"success"} />
                                : null}

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
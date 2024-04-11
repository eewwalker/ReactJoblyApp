import { useState } from "react";
/**
 * Login component renders form for user login
 *
 * Props: none
 * State: loginUser { username, password}
 *
 * App-> RoutesList -> LoginForm
 */


function LoginForm({ updateUser }) {
    const initialData = { username: '', password: '' };
    const [loginUser, setLoginUser] = useState(initialData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        loginUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleLogin(evt) {
        evt.preventDefault();
        updateUser(loginUser);
        setLoginUser(initialData);

    }
    return (
        <div className="LoginForm">
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input id="username"
                    name="username"
                    value={loginUser.username}
                    onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input id="password"
                    name="password"
                    value={loginUser.password}
                    onChange={handleChange} />
            </form>

        </div>
    );
}

export default LoginForm;

import { BrowserRouter, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import userContext from "./User/userContext";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import { jwtDecode } from "jwt-decode";

/** Component for entire page.
 *
 * Props: none
 * State:
 * -user: {}
 * -token: userToken
 *
 * App -> {NavBar, RoutesList}
*/

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(function getUserDataFromDb() {

    async function fetchUserData() {
      console.log('token', localStorage.getItem('logIntoken'));
      if (localStorage.getItem('logIntoken')) {
        try {
          const { username } = jwtDecode(localStorage.getItem('logIntoken'));

          JoblyApi.token = localStorage.getItem('logIntoken');

          const resp = await JoblyApi.getUserData(username);
          setUser(resp);

        } catch (err) {
          setUser(null);

        }
      } else {
        setUser(null);
      }
    }
    fetchUserData();

  }, [token]);

  /** Update user with data from loginForm */
  async function loginUser(userData) {
    const token = await JoblyApi.login(userData);
    setToken(token);
    localStorage.setItem('logIntoken', token);

  }

  /** Update user with data from signupForm */
  async function signupUser(userData) {
    const token = await JoblyApi.signUp(userData);
    setToken(token);
    localStorage.setItem('signUptoken', token);

  }

  /** logout user. set token back to initial token and Navigate back to home */
  function logout() {
    localStorage.removeItem('logIntoken');
    console.log('tokenb4logout', token);
    setToken(null);
    console.log('logouttoken', token);
    JoblyApi.resetToken();

    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }} >
          <NavBar logout={logout} />
          <RoutesList loginUser={loginUser} signupUser={signupUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

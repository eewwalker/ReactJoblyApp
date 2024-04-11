
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
  const initialToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  const initialData = {
    user: null,
  };
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialToken);


  useEffect(function getUserDataFromDb() {

    async function fetchUserData() {
      const { username } = jwtDecode(token);
      try {
        const resp = await JoblyApi.getUserData(username);
        setUser(resp);
      } catch (err) {
        setUser(null);
      }
    }
    fetchUserData();

  }, [token]);

  /** Update user with data from loginForm */
  async function loginUser(userData) {
    const token = await JoblyApi.loginIn(userData);
    setToken(token);
  }

  /** Update user with data from signupForm */
  async function signupUser(userData) {

    const token = await JoblyApi.signUp(userData);
    setToken(token);

  }

  /** logout user. set token back to initial token and Navigate back to home */
  function logout() {
    setToken(initialToken);
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

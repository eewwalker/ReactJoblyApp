
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
 * -data: null || {}, token: userToken, errors
 *
 * App -> {NavBar, RoutesList}
*/

function App() {
  const [data, setData] = useState({
    user: null,
    hasDataLoaded: true,
    token: localStorage.getItem('token'),
    errors: null

  });


  useEffect(function getUserDataFromDb() {

    async function fetchUserData() {

      if (data.token) {
        try {
          const { username } = jwtDecode(data.token);

          JoblyApi.token = data.token;

          const resp = await JoblyApi.getUserData(username);
          setData(data => ({
            ...data,
            user: resp,
            hasDataLoaded: true
          }));

        } catch (err) {
          setData(data => ({
            ...data,
            user: null,
            errors: err
          }));

        }
      } else {
        setData(data => ({
          ...data,
          user: null
        }));
      }
    }
    fetchUserData();

  }, [data.token]);

  /** Update user with data from loginForm */
  async function loginUser(userData) {
    const token = await JoblyApi.login(userData);
    localStorage.setItem('token', token);
    setData(data => ({
      ...data,
      hasDataLoaded: true,
      token: token
    }));

  }

  /** Update user with data from signupForm */
  async function signupUser(userData) {
    const token = await JoblyApi.signUp(userData);
    localStorage.setItem('token', token);
    setData(data => ({
      ...data,
      hasDataLoaded: true,
      token: token
    }));

  }

  /** logout user. set token back to initial token and Navigate back to home */
  function logout() {
    localStorage.removeItem('token');
    setData(data => ({
      ...data,
      token: null
    }));

    JoblyApi.resetToken();
  }

  if (data.token && data.user === null) {
    return < p > Loading...</p >;
  }


  return (
    <div className="App">
      {!data.hasDataLoaded && <p>Loading...</p>}
      <BrowserRouter>
        <userContext.Provider value={data} >
          <NavBar logout={logout} />
          <RoutesList loginUser={loginUser} signupUser={signupUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

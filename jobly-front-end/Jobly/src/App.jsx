
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import userContext from "./User/userContext";
import { useState, useEffect } from "react";
import JoblyApi from "./api";


/** Component for entire page.
 *
 * Props: none
 * State:
 * -user: {}
 *
 * App -> {NavBar, RoutesList}
*/

function App() {
  const initialData = {
    user: null,
  };
  const [user, setUser] = useState(initialData);
  const [token, setToken] = useState(null);

  useEffect(() => {

  }, [token]);

  /** Update user with data from loginForm */
  async function loginUser(userData) {
    const token = await JoblyApi.loginIn(userData);
    setUser(userData);
    setToken(token);
  }

  /** Update user with data from signupForm */
  async function signupUser(userData) {
    const token = await JoblyApi.signUp(userData);
    setUser(userData);
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }} >
          <NavBar />
          <RoutesList loginUser={loginUser} signupUser={signupUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

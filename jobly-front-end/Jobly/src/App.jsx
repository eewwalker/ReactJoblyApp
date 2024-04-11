
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import userContext from "./User/userContext";
import { useState } from "react";


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

  /** Update user with data from loginForm */
  function updateUser(userData) {
    setUser(setData);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user }} >
          <NavBar />
          <RoutesList updateUser={updateUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;


import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {NavBar, RoutesList}
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
};

export default App;

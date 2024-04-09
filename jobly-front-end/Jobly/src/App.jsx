import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import logo from './logo.svg';
import './App.css';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
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

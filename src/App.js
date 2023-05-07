import React from 'react';
import './App.css';
// Import the JavaScript file that creates the loader element
import "./loader.js";

import HomePage from "./Home";
import Events from './Events/Events';

function App() {
  return (
    <div>
      <HomePage />
      <Events />
    </div>
  );
}

export default App


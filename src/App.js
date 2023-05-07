import React from 'react';
import './App.css';
// Import the JavaScript file that creates the loader element
import "./loader.js";

import Events from './Events/Events';
import AboutPage from './About';

function App() {
  return (
    <div>
      <AboutPage />
      <Events />
    </div>
  );
}

export default App


import React from 'react';
import './App.css';
// Import the JavaScript file that creates the loader element
import "./loader.js";


import Society from './Society/Society';
import Events from './Events/Events';
import AboutPage from './About';


function App() {
  return (
    <div>
      <AboutPage />


      <Society />

      <Events />

    </div>
  );
}

export default App


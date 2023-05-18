import React from 'react';
import './App.css';
// Import the JavaScript file that creates the loader element
import "./loader.js";

import ContactUs from './footer/Contact';
import Team from './teams/team';
import Society from './Society/Society';
import Events from './Events/Events';
import AboutPage from './About';


function App() {
  return (
    <div>
      <AboutPage />


      <Society />
      <Team />

      <Events />
      <ContactUs />

    </div>
  );
}

export default App


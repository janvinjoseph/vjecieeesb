import React from 'react';
import './Home.css';
function HomePage() {
  return (
    
    <div>
      {/* Header */}
      <header className="header">
      <img src="IEEE-Logo.jpg" alt="IEEE Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/Events">EVENTS</a></li>
            <li><a href="/Societies">SOCIETIES</a></li>
            <li><a href="/Team">TEAM</a></li>
            <li><a href="/About Us">ABOUT US</a></li>
            <li><a href="/Contact Us">CONTACT US</a></li>
            <li><a href="https://www.ieee.org/membership/index.html">JOIN NOW</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        
        <div className="comp">
          <h3 className='hthree'>IEEE SB VJEC</h3>
          <a href="/Events" className="event-button">EVENTS</a>
          <h4 className='hfour'>Know About Our Events</h4>
          <h1 className='hone'>Your future of better learning starts here...</h1>
        </div>
      </section>
</div>

   
  );
}

export default HomePage;

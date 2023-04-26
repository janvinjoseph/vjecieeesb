import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './App.css';
// Import the JavaScript file that creates the loader element
import "./loader.js";

import AboutPage from "./About";
import EventsList from "./eventList";
import { eventDetails, responsive } from "./eventData";

function App() {
  const event = eventDetails.map(item => (
    <EventsList name={item.name} url={item.imgurl} discription={item.discription} />
  ));

  return (
    <div>
      <AboutPage />
      <div className="outerBox">
        <div className="headerBox">
          <div className="firstText">
            <h3>FUN & ACTIVITIES</h3>
          </div>
          <div className="secondText">
            <h1>OUR EVENTS</h1>
          </div>
          <div className="thirdText">
            <h3>SOME OF THE EVENTS CONDUCTED BY IEEE SB VJEC THROUGHOUT THE YEAR</h3>
          </div>
          <div className="carouselBox">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={2500}
              infinite={true}
              transitionDuration={500}
              showDots={true}
              swipeable={true}
              draggable={true}>
              {event}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App


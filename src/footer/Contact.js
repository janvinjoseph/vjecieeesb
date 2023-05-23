import React from 'react';
import './Contact.css';

function ContactUs() {
  return (
    <div>
      <link rel="stylesheet" href="/Contact.css"></link>
      {/* Footer */}
      <div id="logo">
        <img src="IEEE-Logo2.png" alt="IEEE Logo" />
      </div>
      <section className='foot'>
        <div className="contact-container">
          <div className="head4">
            <h4>Contact Information</h4>
            <p>Vimal Jyothi Engineering College,</p>
            <p>Jyothi Nagar,</p>
            <p>Chemperi, Kannur, Pin Code: 670632</p>
            <h4 className='head4'>Email Us At</h4>
            <p>ieee.vjecsb@gmail.com</p>
            <h4>Call Us At</h4>
            <p>Agil Mathew: 9207651172</p>
            <p>Prabin: 9400590235</p>
          </div>
          <form className='form' action="http://localhost:3001/send-email" method="POST">
          <h2>Leave a Message</h2>
            <input name="name" type="text" className="feedback-input" placeholder="Name" />
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6245799019866!2d75.5602806457401!3d12.098489880315556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4485fc403e7e9%3A0xd1ae420ddb601073!2sVimal%20Jyothi%20Engineering%20College%2C%20Chemperi%2C%20Kannur!5e0!3m2!1sen!2sin!4v1683109372095!5m2!1sen!2sin" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='locate' className='map'></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;


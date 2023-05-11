import React from 'react';
import './Contact.css';
function ContactUs() {
  return (
    
    <div>
      <link rel="stylesheet" href="/Contact.css"></link>
      {/* Footer */}
      <div id="logo">
        <img src="IEEE-Logo2.png" alt="IEEE Logo"/>
      </div>
      <div id='locate'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6245799019866!2d75.5602806457401!3d12.098489880315556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4485fc403e7e9%3A0xd1ae420ddb601073!2sVimal%20Jyothi%20Engineering%20College%2C%20Chemperi%2C%20Kannur!5e0!3m2!1sen!2sin!4v1683109372095!5m2!1sen!2sin" width="400" height="300" /*style="border:0;"*/ allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='locate' className='locate'></iframe>
      </div>
      <section className='foot'>
        <div>
          <footer>
            <h4 className='head4'>Contact Us</h4>
          </footer>
        </div>
        <div>
          <ul>
            <li className='head5'><div id='icons'><img src="address.png" alt="address" width={"35px"}className='icon5'/></div>Jyothi Nagar, Chemperi (PO)
            Kannur - 670632, Kerala, India.</li>
            <li className='head5'><div id='icons'><img src="phone.png" alt="phone" width={"35px"}className='icon1'/></div>0460 2213399</li>
            <li className='head5'><div id='icons'><img src="phone.png" alt="phone" width={"35px"}className='icon2'/></div>0460 2212240</li>
            <li className='head5'><div id='icons'><img src="phone.png" alt="phone" width={"35px"}className='icon3'/></div>0460 2213513</li>
            <li className='head5'><div id='icons'><img src="email.png" alt="email" width={"35px"}className='icon4'/>Email</div></li>
          </ul>
          <p className='here'><img src="location.png" alt="address" width={"35px"} className='icon6'/>We're here</p>
        </div>
      </section>
</div>
  );
}

export default ContactUs;

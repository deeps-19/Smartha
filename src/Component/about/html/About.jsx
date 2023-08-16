import React from 'react';
import imag from '../5031659.jpg'
import '../css/about.css'
const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="containersec">
          <div className="title">
            <h1>About Us</h1>

          </div>
          <div className="content">
            <h3>Welcome to Samarth GST Suvidha Kendra</h3>
            <p>Your Partner in Professional Business Services.

Experience seamless end-to-end solutions for GST, Registration, ITR, PAN Card, DSC, TDS, Insurance, Loans, and more. Our expertise extends to B2C services like Tours & Travel, Bill payments, and recharges.

With a commitment to excellence, we navigate complexities, ensuring your business thrives and personal needs are met. Discover convenience, precision, and professionalism with Samarth GST Suvidha Kendra.</p>
          </div>
          <div className="imagesection">
            <img src={imag} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

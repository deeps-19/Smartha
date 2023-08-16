import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../photoslide/Digital_Signature_Certificate_Corpseed.png'
import image2 from '../photoslide/IMG_CCI_UDHindu_KSL_USI4_2_1_F99P8QL7.jpg'
import image3 from '../photoslide/diffence-between-fssai-registration-and-license.jpg'

import '../css/slider.css'
const Slide = () => {
  return (
    <div>
         <Carousel>
      <Carousel.Item interval={1000}>
       <img src={image1} alt=""  className="slide"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={image2} alt=""  className="slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt=""  className="slide"/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slide

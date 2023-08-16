import React from 'react'

import './contact.css'
import contact from './contact us.jpg'
const Contact = () => {
  return (
    <div className='session1'>
   <div className='content1'>
      
        <div className='contactform'>
            <form>
                <h2>Send Message To Us</h2>
                <div className="inputbox">
                    <input type="text" name="name" id="" required/>
                    <label htmlFor="name">Fullname</label>
                </div>
                <div className="inputbox">
                    <input type="text" name="mail" id="" required/>
                    <label htmlFor="mail">Email</label>
                </div>
                <div className="inputbox">
                   <textarea name="message" id="" cols="30" rows="10" required></textarea>
                    <label htmlFor="message">Type Your Message...</label>
                </div>
                <div className="inputbox">
                   <input type="button" value="submit" />
                </div>
            </form>
        </div> 
        <div>
            <p style={{float:"right",marginTop:"89px"}}>
                <img src={contact} alt="" srcset="" />
            </p>
        </div>     
    </div>
    </div>
  )
}

export default Contact

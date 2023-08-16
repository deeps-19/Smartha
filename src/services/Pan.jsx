import React from 'react'
import './eway.css'
import eway from './photo/PAN.jpeg'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Pan = () => {
  return (
    <div className='bg'>
    <div>
     <h1 className='ewayh1'>Pan Card</h1>
   <div className="ewaydiv1">

     <img src={eway} alt="" />
     <div className='ewaydiv2'>
       <div className="ewaydiv3" >
       <ul>
        <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>PAN Services :</p>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               New PAN Card
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Correction Application 


             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Duplicate Application
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               PAN-Aadhar Link


             </li>
             <p  style={{fontSize: "1rem"}}>
             We at GST Suvidha Kendra provide information about Pan Card and assistance to Individuals in applying for the same through the authorized agents of the authorities. The services rendered include verifying, supporting and filing the application forms for those who are applying for new PAN card, corrections and changes to their existing PAN data and request for duplicate or replacement of lost or damaged PAN card.
             </p>
             
             </ul>
       </div>
    
        
     </div>

   </div>
 </div>
 </div>
  )
}

export default Pan

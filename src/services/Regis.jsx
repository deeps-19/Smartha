import React from 'react'
import './eway.css'
import eway from './photo/registration.avif'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Regis = () => {
  return (
    <div>
    <div>
     <h1 className='ewayh1'>Udyam & Trademark </h1>
   <div className="ewaydiv1">

     <img src={eway} alt="" />
     <div className='ewaydiv2'>
       <div className="ewaydiv3" style={{marginTop:"25%" , fontSize:"1.5rem"}}>
       <ul>
        <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>Services Covered Under Udyam & Trademark : </p>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Udyam Registration
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Udyam KYC Update


             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Trademark Registration 
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Trademark Objection


             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Trademark Hearing Charges
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Trademark Opposed
             </li>
             
             
             </ul>
       </div>
    
        
     </div>

   </div>
 </div>
 </div>
  )
}

export default Regis

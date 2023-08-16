import React from 'react'
import './eway.css'
import eway from './photo/bill.jpeg'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Bill = () => {
  return (
    <div>
    <div>
     <h1 className='ewayh1'>Bills Payment</h1>
   <div className="ewaydiv1">

     <img src={eway} alt="" />
     <div className='ewaydiv2'>
       <div className="ewaydiv3" style={{marginTop:"25%" , fontSize:"1.5rem"}}>
       <ul>
        <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>Recharge And Pay Bills :</p>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Mobile Post-Paid Bill Payment
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Electricity Bill Payment


             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Landline Bill Payment
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Cable TV Bill Payment


             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               DTH Bill Payment
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Broadband Bill Payment
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Insurance Premium Payment
             </li>
             <li style={{listStyle:"none"}}>
               <span><DoneTwoToneIcon/></span>
               Water Bill Payment
             </li>
             
             
             </ul>
       </div>
    
        
     </div>

   </div>
 </div>
 </div>
  )
}

export default Bill

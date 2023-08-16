import React from 'react'
import './account.css'
import account from './photo/accountbg.avif'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

const Accounting = () => {
  return (
    <div className='accountdiv'>
       
       
      <div className="accountdiv1">
        <img src={account} alt="" ></img>
       <div className="accountdiv3">
       <p className='accounth1'>Accounting</p>
       
          <ul>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Monthly - Accounting Package / GST Book keeping / Digital Tax Payment 
                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Yearly - Accounting Package / GST Book keeping / GST Return Filing/ Reconciliation/Digital Tax Payment 

                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Balance Sheet & Profit Loss Account
                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  CA Certification of Balance Sheet

                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Project Balance Sheet
                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Income Tax Audit
                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  Appointment of an Auditor 1
                </li>
                <li style={{listStyle:"none",textAlign:"left"}}>
                  <span><DoneTwoToneIcon/></span>
                  DSC
                </li>
                
                </ul>
        
                </div>
      </div>
    </div>
  )
}

export default Accounting

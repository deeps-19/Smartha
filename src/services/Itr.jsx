import React from 'react'
import './eway.css'
import eway from './photo/itr.avif'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Itr = () => {
  return (
    <div>
       <div>
        <h1 className='ewayh1'>Income Tax Return</h1>
      <div className="ewaydiv1">

        <img src={eway} alt="" />
        <div className='ewaydiv2'>
          <div className="ewaydiv3" style={{marginTop:"35%"}}>
          <ul>
            <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>ITR Services :</p>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR 1
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR (Proprietor Business & Profession ) 


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR (Capital Gain/ House Property / Other Source)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR (Form 10E)


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR (Response of Notice)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR Correction
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR 5 - ( For Firms/Limited Liabilities Partnership)

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ITR-U for Financial Year
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  ADVANCE TAX
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  TDS Return
                </li>
                
                
                </ul>
          </div>
       
           
        </div>

      </div>
    </div>
    </div>
  )
}

export default Itr

import React from 'react'
import './eway.css'
import eway from './photo/importex.jpg'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Ies = () => {
  return (
    <div>
    <h1 className='ewayh1'>Import & Export Code</h1>
  <div className="ewaydiv1">

    <img src={eway} alt="" />
    <div className='ewaydiv2'>
      <div className="ewaydiv3">
      <ul>
            <li style={{listStyle:"none"}}>
              <span><DoneTwoToneIcon/></span>
              Import Export Code (IEC) AMMENDMENT
            </li>
            <li style={{listStyle:"none"}}>
              <span><DoneTwoToneIcon/></span>
              Import Export Code (IEC) Registration Company

            </li>
            <li style={{listStyle:"none"}}>
              <span><DoneTwoToneIcon/></span>
              Import Export Code Partnership
            </li>
            
            
            
            </ul>
      </div>
   
       
    </div>

  </div>
</div>
  )
}

export default Ies

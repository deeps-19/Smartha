import React from 'react'
import './account.css'
import account from './photo/poster-food-promotion-theme-shading-traditional-ink-powerpoint-background_2db241f378__960_540.avif'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

const Fassi = () => {
  return (
    <div className='accountdiv'>
       
       
    <div className="accountdiv1">
      <img src={account} alt="" ></img>
     <div className="accountdiv3">
     <p className='accounth1'>FSSAI</p>
     
        <ul>
              <li style={{listStyle:"none",textAlign:"left"}}>
                <span><DoneTwoToneIcon/></span>
                FSSAI Basic Registration
              </li>
              <li style={{listStyle:"none",textAlign:"left"}}>
                <span><DoneTwoToneIcon/></span>
                FSSAI State/Central License

              </li>
              <li style={{listStyle:"none",textAlign:"left"}}>
                <span><DoneTwoToneIcon/></span>
                GST Annual Return 
              </li>
             
              
              </ul>
      
              </div>
    </div>
  </div>
  )
}

export default Fassi

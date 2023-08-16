import React from 'react'
import './eway.css'
import eway from './photo/unnamed.png'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Eway = () => {
  return (
    <div>
        <h1 className='ewayh1'>E-Way Bill</h1>
      <div className="ewaydiv1">

        <img src={eway} alt="" />
        <div className='ewaydiv2'>
          <div className="ewaydiv3">
          <ul>
          <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>E-Way Bill Packages :</p>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way Bill - Registration For Individuals 
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way Bill- Single For Individuals


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way - (Pack -5) One Month For Individuals
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way - (Pack -15) One Month For Individuals


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way Bill - Registration For Organisations
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way Bill- Single For Organisations
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way - (Pack -5) One Month For Organisations

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  E-way - (Pack -15) One Month For Organisations

                </li>
                
                
                </ul>
          </div>
       
           
        </div>

      </div>
    </div>
  )
}

export default Eway

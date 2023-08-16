import React from 'react'
import './cofor.css'
import cofor from './photo/coformation.jpg'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Coformation = () => {
  return (
    <div>
       <h1 className='coforh1'>Co-Formation</h1> 
      <div className="cofordiv1">
        <img src={cofor} alt="" />
        <div className='cofordiv2'>
          <div className="cofordiv3">
          <ul>
            <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>What Comes Under Co-Formation ?</p>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  LLP Formation 
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Partnership Registration


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Company Registration
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Director Identification Number (TWO DIN)


                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Proprietorship Registration
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Director Identification Number (Single DIN)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Conversion of Private Limited Into OPC
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Voluntary Conversion of OPC
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Nidhi Company Registration

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  OPC Registration

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Name Approval of LLP, Private Limited, OPC
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  Amedment in MOA & AOA
                </li>
                
                </ul>
          </div>
       
           
        </div>

      </div>
    </div>
  )
}

export default Coformation

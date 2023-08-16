import React from 'react'

import './gst.css'
import gst from './photo/GST.jpg'
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
const Gst = () => {

  return (
    <div className='gstdiv'>
        <p className='gsth1'>Goods And Services Tax</p>
       {/* <Card className='gstcard'>
        <Card.Img variant="left" src={gst} />
        <Card.Body>
          <Card.Text>

          </Card.Text>
          <Card.Text style={{fontWeight:"500"}}>
            <ul>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Registration
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Return Filing

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Audit 
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST CASH REFUND

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Surrender
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Response of Notice
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GSTR-7
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  DRC-03 Filing
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GSTR 6 Return Filing

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST E-Commerece Return (GSTR 8)

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Final Return (GSTR 10)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Reconciliation (Upto 3 Months)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Regular Return filing(Annual charges)
                </li>
                
            </ul>
          </Card.Text>
        </Card.Body>
      </Card> */}
      <div className="gstdiv1">
        
        <img src={gst} alt="" />
        <div className='gstdiv2'>
          <div className="gstdiv3">
          <ul>
          <p style={{fontSize: "2rem",color: "gold",fontWeight: "700"}}>GST Services :</p>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Registration
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Return Filing

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Audit 
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST CASH REFUND

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Surrender
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Response of Notice
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GSTR-7
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  DRC-03 Filing
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GSTR 6 Return Filing

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST E-Commerece Return (GSTR 8)

                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Final Return (GSTR 10)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Reconciliation (Upto 3 Months)
                </li>
                <li style={{listStyle:"none"}}>
                  <span><DoneTwoToneIcon/></span>
                  GST Regular Return filing(Annual charges)
                </li>
                </ul>
          </div>
       
           
        </div>

      </div>
    </div>
  )
}

export default Gst

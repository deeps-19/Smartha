import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
import "../css/services.css"
import { Link } from 'react-router-dom';
import deco from "../photo/decor-image2.png"
import srvicedb from '../js/srvicedb';
const Services = () => {
    const {productItems} = srvicedb
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection:"column"}}>
         <h1>Our Services</h1>
         <img src={deco} alt="" />
      
   
    <div className='product'>

    {productItems.map((productItem)=>{
      return(
        <div className="div1">


    <div className="card2">
      <div className="card-image">

        <img className="image2" src={productItem.cover} alt="" srcset="" />
        <h1>{productItem.name}</h1>
      </div>
      <div className='cardbody'>
        <Link to={productItem.link} className='a1'>
          <LinkIcon/>
        </Link>
      </div>
    </div>
    </div>
     )
    })
  }
  </div>
    </div>
  )
}

export default Services

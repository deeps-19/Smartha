import React from "react";
// import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import './css/header.css'

const Footer = () => {
return (
    <div className="footerdiv1">

  
	<div className="footerdiv">
	

		
    <div href="#">
			<PhoneIcon style={{color:"25D366"}}/>
			</div>
			<a href="https://www.instagram.com/samarth_gst_suvidha_kendra4/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"  >
			<InstagramIcon style={{color: "E4405F"}}/>
			</a>
			<div >
			<a href="https://www.facebook.com/profile.php?id=100095499103125"> 
	<FacebookIcon style={{color:"1877F2"}}/>
	
	</a>
			
			</div>
			<a href="https://www.linkedin.com/in/samarth-gsk-3a4540286/" >
			<LinkedInIcon style={{color:"0A66C2"}}/>
			</a>
			
		
	
	</div>
    </div>
);
};
export default Footer;

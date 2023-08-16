import React from 'react'

import logo from './logo/logo.png'
import './css/header.css'
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const Header = () => {
  return (
    // <div className='div2'>
    //     <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home"><img src={logo} alt="" srcset="" className='logo'/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"600px"}}>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>

    //         <NavDropdown title="Services" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">GST</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //            Accounting
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">DSC</NavDropdown.Item>

    //         </NavDropdown>
    //         <Nav.Link href="#link">Contact Us</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </div>
    <div className='hediv'>
      <nav className='henav'>

        <div className="wrapper">
          <div className="logo"><Link to="/"><img src={logo} alt="" className='logo' /></Link></div>
          <input type="radio" name="slider" id="menu-btn" style={{display:"none"}}/>
      <input type="radio" name="slider" id="close-btn" style={{display:"none"}}/>
          <ul className="navlinks">
          <label for="close-btn" class="btn cancel-btn"><CloseIcon/></label>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/" className='desktop-item'>Services</Link>
              <input type="checkbox" id="showMega" style={{display:"none"}}/>
          <label for="showMega" class="mobile-item">Services</label>
                <div className="megabox">
                  <div className="content">
                    <div className="row">
                      <ul className="megalink">
                        <li><Link to="/account">Accounting</Link></li>
                        {/* <li><Link>Audit</Link></li> */}
                        <li><Link to="/coformation">Co-Formation</Link></li>
                        {/* <li><Link>Dsc</Link></li> */}
                         <li><Link to="/gst">GST</Link></li>
                        <li><Link to='/e-way'>E-Way</Link></li>
                       
                      </ul>
                    </div>
                    {/* <div className="row">
                      <ul className="megalink">
                       
                       
                       
                      </ul>
                    </div> */}
                    <div className="row">
                      <ul className="megalink">
                        <li><Link to="/ITR">ITR</Link></li>
                        <li><Link to='/fassi'>FSSAI</Link></li>
                        <li><Link to='/IEC'>IEC</Link></li>
                        {/* <li><Link>TAX</Link></li> */}
                        {/* <li><Link>Trademark</Link></li> */}
                       
                      </ul>
                    </div>
                    <div className="row">
                      <ul className="megalink">
                      <li><Link to='/Registration'>MSME</Link></li>
                        <li><Link to='/Billpayment'>Bill Payment</Link></li>
                        <li><Link to='/Pan-Card'>PAN</Link></li>
                        {/* <li><Link>Bus Booking</Link></li>
                        <li><Link>Flight Booking</Link></li> */}
                       
                      </ul>
                    </div>
                  </div>

                </div>
              
            </li>
            <li><Link to="/Contact">Contact Us</Link></li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><MenuOutlinedIcon/></label>
        </div>
      </nav>
    </div>
  )
}

export default Header

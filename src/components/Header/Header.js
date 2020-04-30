import React, { useState } from 'react';
//import { Link, NavLink } from 'react-router-dom';
import './header.scss'
import logo from './logo.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
      <Navbar className="header" style ={{backgroundColor:'#0e0245'}} dark expand="md">
      <img id='logoCovidEscape' src={logo} alt='logoCovid'/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem> */}
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

  
}



export default Header

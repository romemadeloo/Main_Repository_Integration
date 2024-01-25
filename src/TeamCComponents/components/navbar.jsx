import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'popper.js/dist/umd/popper.min.js';

import '../css/navbar.css';  // Import your custom CSS file here

 function TeamC_Navbar() {

  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: '#D9FFCF' }}>
      <div className="navbar container-fluid">
        <Navbar.Brand href="#">
          <img className="logo me-1 img-fluid" src="/pics/logo.png" alt="tsukiden-logo" style={{ width: '150px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="menuTabs me-auto mb-2 mb-lg-0">
            <Nav.Link as={NavLink} to="/" >
              Dashboard
            </Nav.Link>
            <NavDropdown 
              title="My Courses" 
              id="my-courses-dropdown"
              className="menuDropdown menuTabs">
              <NavDropdown.Item as={NavLink} to="/course" className="navDropItems">
                Program Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/assessment" className="navDropItems">
                Assessments
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/forum" >
              Forum
            </Nav.Link>
          </Nav>
          <Button variant="outline-dark" style={{ borderColor: '#0e3b03' }}>
            LOGOUT
          </Button>
        </Navbar.Collapse>  
      </div>
    </Navbar>
  );
}

export default TeamC_Navbar;
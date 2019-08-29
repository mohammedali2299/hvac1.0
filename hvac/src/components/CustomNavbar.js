import React from 'react';

import { Navbar, Image } from 'react-bootstrap';

import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'




function MyNavbar() {
    return (


        <Navbar sticky="top" variant="light" expand="md" className="p-0 m-0 shadow-element bar">
            <Navbar.Brand href="/">
            <Image 
                src="/extras/LOGO2.jpg" 
                className="w-100 h-100"
            />
            {/* <NavBarContact /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <NavbarButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;



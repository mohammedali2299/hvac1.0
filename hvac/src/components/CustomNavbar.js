import React, { Component } from 'react';
import { Navbar, Nav, Image, Button, Dropdown } from 'react-bootstrap';
import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'
import NavBarContact from './subcomponents/NavBarContact'




function MyNavbar() {
    return (
        <Navbar sticky="top" bg="white" variant="light" expand="lg" className="pt-0 pb-0 mt-0 mb-0">
            <Navbar.Brand href="/">
            <Image 
                width={200}
                height={110}
                src="/extras/originalLOGO.jpg" 
            />
            <NavBarContact />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <NavbarButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;



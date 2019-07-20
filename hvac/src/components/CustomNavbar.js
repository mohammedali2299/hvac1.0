import React, { Component } from 'react';
import { Navbar, Nav, Image, Button, Dropdown } from 'react-bootstrap';
import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'




function MyNavbar() {
    return (
        <Navbar sticky="top" bg="white" variant="light" expand="lg">
            <Navbar.Brand href="/">
            <Image 
                width={175}
                height={110}
                src="/extras/originalLOGO.jpg" 
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <NavbarButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;



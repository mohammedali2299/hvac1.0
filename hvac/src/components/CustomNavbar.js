import React from 'react';
<<<<<<< Updated upstream
import { Navbar, Image, Row, Col, Container } from 'react-bootstrap';
=======
import { Navbar, Image, Row, Col } from 'react-bootstrap';
>>>>>>> Stashed changes
import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'
import NavBarContact from './subcomponents/NavBarContact'




function MyNavbar() {
    return (

        <Navbar sticky="top" bg="white" variant="light" expand="md" className="p-0 m-0 shadow">
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



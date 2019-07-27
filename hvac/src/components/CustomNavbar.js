import React from 'react';
import { Navbar, Image, Row, Col, Container } from 'react-bootstrap';
import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'
import NavBarContact from './subcomponents/NavBarContact'




function MyNavbar() {
    return (

        <Navbar as={Container} fluid sticky="top" bg="white" variant="light" expand="lg" className="pt-0 pb-0 mt-0 mb-0">
            <Row noGutters>
                <Col xs={4} lg={2}>
                    <Navbar.Brand className="m-0 p-0" href="/">
                    <Image 
                        className="w-100 h-100"
                        src="/extras/yellowLOGO.jpg" 
                    />
                    </Navbar.Brand>
                </Col>
                <Col xs={{ span: 1, order: 3 }} lg={{ offset: 0, span: 8, order: 2 }} className="d-flex justify-content-end align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-3" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <NavbarButtons />
                    </Navbar.Collapse>
                </Col>
                <Col xs={7} lg={{ span: 2, order: 3 }}>
                    <NavBarContact />
                </Col>
            </Row>

        </Navbar>
    );
}

export default MyNavbar;



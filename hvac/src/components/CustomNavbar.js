import React, { Component } from 'react';
import { Navbar, Nav, Image, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

class CustomNavbar extends Component {
render() {
    return(
        <Navbar className="navbar" inverse collapseOnSelect>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="/extras/unitedhvacLOGO.jpg" className="companyHome" roundedCircle/>
                    <h2 className="companyName">United HVAC and Electrical</h2>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="nav-buttons" >
                    <Nav.Item className="linked-list">
                        
                        <Dropdown >
                            <Button href="/cooling" className="dropdowns">Cooling</Button>
                            <Dropdown.Toggle split className="dropdown-button" />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/cooling/install">Install</Dropdown.Item>
                                    <Dropdown.Item href="/cooling/repair">Repair</Dropdown.Item>
                                    <Dropdown.Item href="/cooling/maintain">Maintain</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="dropdowns">
                                <Button href="/heating" className="dropdowns">Heating</Button>
                                <Dropdown.Toggle split className="dropdown-button"  />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/heating/install">Install</Dropdown.Item>
                                    <Dropdown.Item href="/heating/repair">Repair</Dropdown.Item>
                                    <Dropdown.Item href="/heating/maintain">Maintain</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="dropdowns">
                                <Button href="/ducting" className="dropdowns">Ducting</Button>
                                <Dropdown.Toggle split className="dropdown-button"  />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/ducting/install">Install</Dropdown.Item>
                                    <Dropdown.Item href="/ducting/repair">Repair</Dropdown.Item>
                                    <Dropdown.Item href="/ducting/maintain">Maintain</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="dropdowns">
                                <Button href="/electrical" className="dropdowns">Electrical</Button>
                                <Dropdown.Toggle split className="dropdown-button"  />
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/electrical/install">Install</Dropdown.Item>
                                    <Dropdown.Item href="/electrical/repair">Repair</Dropdown.Item>
                                    <Dropdown.Item href="/electrical/maintain">Maintain</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            

                        {/* <Nav.Link href="/heating" eventKey={5}>Heating</Nav.Link>
                        <Nav.Link href="/ducting" eventKey={6}>Ducting</Nav.Link>
                        <Nav.Link href="/electrical" eventKey={7}>Electrical</Nav.Link> */}
                        <Nav.Link href="/emergency-services" eventKey={8}>Emergency Services</Nav.Link>
                        <Nav.Link href="/about" eventKey={2}>About</Nav.Link>
                        <Nav.Link href="/contact" eventKey={3}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
}

export default CustomNavbar;


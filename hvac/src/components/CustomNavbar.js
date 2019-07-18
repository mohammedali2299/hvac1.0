import React, { Component } from 'react';
import { Navbar, Nav, Image, Button, Dropdown } from 'react-bootstrap';
import NavbarButtons from './subcomponents/NavbarButtons.js'
import './CustomNavbar.css'




function MyNavbar() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
            <Image 
                width={120}
                height={75}
                className="mr-3"
                src="/extras/unitedhvacLOGO.jpg" 
                roundedCircle
            />
            {'United HVAC and Electrical Inc.'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <NavbarButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;

// class CustomNavbar extends Component {
// render() {
//     return(

        // <Navbar className="navbar" inverse collapseOnSelect>
        //     <Navbar.Brand>
        //         <Link to="/">
        //             <Image src="/extras/unitedhvacLOGO.jpg" className="companyHome" roundedCircle/>
        //             <h2 className="companyName">United HVAC and Electrical</h2>
        //         </Link>
        //     </Navbar.Brand>
        //     <Navbar.Toggle />
        //     <Navbar.Collapse>
        //         <Nav className="nav-buttons" >
        //             <Nav.Item className="linked-list">
                        
        //                 <Dropdown >
        //                     <Button href="/cooling" className="dropdowns">Cooling</Button>
        //                     <Dropdown.Toggle split className="dropdown-button" />
        //                         <Dropdown.Menu>
        //                             <Dropdown.Item href="/cooling/install">Install</Dropdown.Item>
        //                             <Dropdown.Item href="/cooling/repair">Repair</Dropdown.Item>
        //                             <Dropdown.Item href="/cooling/maintain">Maintain</Dropdown.Item>
        //                         </Dropdown.Menu>
        //                     </Dropdown>

        //                     <Dropdown className="dropdowns">
        //                         <Button href="/heating" className="dropdowns">Heating</Button>
        //                         <Dropdown.Toggle split className="dropdown-button"  />
        //                         <Dropdown.Menu>
        //                             <Dropdown.Item href="/heating/install">Install</Dropdown.Item>
        //                             <Dropdown.Item href="/heating/repair">Repair</Dropdown.Item>
        //                             <Dropdown.Item href="/heating/maintain">Maintain</Dropdown.Item>
        //                         </Dropdown.Menu>
        //                     </Dropdown>

        //                     <Dropdown className="dropdowns">
        //                         <Button href="/ducting" className="dropdowns">Ducting</Button>
        //                         <Dropdown.Toggle split className="dropdown-button"  />
        //                         <Dropdown.Menu>
        //                             <Dropdown.Item href="/ducting/install">Install</Dropdown.Item>
        //                             <Dropdown.Item href="/ducting/repair">Repair</Dropdown.Item>
        //                             <Dropdown.Item href="/ducting/maintain">Maintain</Dropdown.Item>
        //                         </Dropdown.Menu>
        //                     </Dropdown>

        //                     <Dropdown className="dropdowns">
        //                         <Button href="/electrical" className="dropdowns">Electrical</Button>
        //                         <Dropdown.Toggle split className="dropdown-button"  />
        //                         <Dropdown.Menu>
        //                             <Dropdown.Item href="/electrical/install">Install</Dropdown.Item>
        //                             <Dropdown.Item href="/electrical/repair">Repair</Dropdown.Item>
        //                             <Dropdown.Item href="/electrical/maintain">Maintain</Dropdown.Item>
        //                         </Dropdown.Menu>
        //                     </Dropdown>
                            

        //                 {/* <Nav.Link href="/heating" eventKey={5}>Heating</Nav.Link>
        //                 <Nav.Link href="/ducting" eventKey={6}>Ducting</Nav.Link>
        //                 <Nav.Link href="/electrical" eventKey={7}>Electrical</Nav.Link> */}
        //                 <Nav.Link href="/emergency-services" eventKey={8}>Emergency Services</Nav.Link>
        //                 <Nav.Link href="/about" eventKey={2}>About</Nav.Link>
        //                 <Nav.Link href="/contact" eventKey={3}>Contact</Nav.Link>
        //             </Nav.Item>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
//     );
// }
// }

// export default CustomNavbar;


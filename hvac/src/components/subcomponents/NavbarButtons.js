import React from 'react';
import { Button, Dropdown, ButtonToolbar } from 'react-bootstrap';
import './NavbarButtons.css'

function NavbarButtons() {
    return (
        <ButtonToolbar className="mb-0 pb-0">
            <Dropdown>
                <Dropdown.Toggle variant="white" className="mt-0 mr-1">
                    Services
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/cooling" className="nav-cooling">Cooling</Dropdown.Item>
                    <Dropdown.Item href="/heating" className="nav-heating">Heating</Dropdown.Item>
                    <Dropdown.Item href="/electrical" className="nav-electrical">Electrical</Dropdown.Item>
                    <Dropdown.Item href="/ducting" className="nav-ducting">Ducting</Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="/residential" className="nav-rescom">Residential</Dropdown.Item>
                    <Dropdown.Item href="/commercial" className="nav-rescom">Commercial</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {['Emergency-Services', 'About', 'FAQ'].map(
                title => (
                    <Button href={'/' + title.toLowerCase()} variant="white" className="mt-0 mr-1">{title}</Button>
                ),
            )}
            <Button href="/contact" className="contact-submit border-0 mr-3">Contact</Button>
        </ButtonToolbar>
    );
}

export default NavbarButtons
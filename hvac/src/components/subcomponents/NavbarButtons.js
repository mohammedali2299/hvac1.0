import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';

function NavbarButtons() {
    return (
        <ButtonToolbar className="mb-1">
            <Dropdown>
                <Dropdown.Toggle variant="white" className="mt-0 mr-1">
                    Services
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/cooling">Cooling</Dropdown.Item>
                    <Dropdown.Item href="/heating">Heating</Dropdown.Item>
                    <Dropdown.Item href="/electrical">Electrical</Dropdown.Item>
                    <Dropdown.Item href="/ducting">Ducting</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {['Emergency-Services', 'About', 'FAQ', 'Contact'].map(
                title => (
                    <Button href={'/' + title.toLowerCase()} variant="white" className="mt-0 mr-1">{title}</Button>
                ),
            )}
        </ButtonToolbar>
    );
}

export default NavbarButtons
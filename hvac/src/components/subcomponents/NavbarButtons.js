import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';

function NavbarButtons() {
    return (
    <ButtonToolbar>
        {['Cooling', 'Heating', 'Ducting', 'Electrical', 'Emergency-Services', 'About', 'Contact'].map(
            title => (
                <Button href={'/' + title.toLowerCase()} variant="dark" className="mr-1">{title}</Button>
            ),
        )}
    </ButtonToolbar>
    );
}

export default NavbarButtons;
import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';

function NavbarButtons() {
    return (
    <ButtonToolbar className="mb-1">
        {['Cooling', 'Heating', 'Ducting', 'Electrical', 'Emergency-Services', 'About', 'FAQ', 'Contact'].map(
            title => (
                <Button href={'/' + title.toLowerCase()} variant="white" className="mt-0 mr-1">{title}</Button>
            ),
        )}
    </ButtonToolbar>
    );
}

export default NavbarButtons;
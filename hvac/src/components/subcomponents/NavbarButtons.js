import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';

function NavbarButtons() {
    var state = {
        show: false
    }

    return (
    <ButtonToolbar>
        {['Cooling', 'Heating', 'Ducting', 'Electrical'].map(
            title => (
                <DropdownButton
                    title={title}
                    variant="dark"
                    href={'/' + title.toLowerCase()}
                    id={"dropdown-variants-dark"}
                    key={title}
                    // onMouseEnter={(e) => state=({ show: true })}
                    // onMouseLeave={(e) => state=({ show: false })}
                    // open={state.show}
                    className="mr-1"
                    rootCloseEvent="click"
                >
                    <Dropdown.Item eventKey="1" href={'/' + title.toLocaleLowerCase() + '/install'}>Install</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href={'/' + title.toLocaleLowerCase() + '/repair'}>Repair</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href={'/' + title.toLocaleLowerCase() + '/maintain'}>Maintain</Dropdown.Item>
                </DropdownButton>
            ),
        )}
        {['Emergency-Services', 'About', 'Contact'].map(
            title => (
                <Button href={'/' + title.toLowerCase()} variant="dark" className="mr-1">{title}</Button>
            ),
        )}
    </ButtonToolbar>
    );
}

export default NavbarButtons;
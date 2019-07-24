import React from 'react';
import { Image } from 'react-bootstrap';

function NavBarContact() {
    return (
        <a href='/contact'>
            <Image src="/extras/contactnavlink.jpg" className="w-25 h-25"></Image>
        </a>
        
    );
}

export default NavBarContact;
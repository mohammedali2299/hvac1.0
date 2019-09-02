import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import SocialMedia from './SocialMedia'


function ContactIcon() {

    return (
        <div fluid className="h-100 w-100 p-3">
            <h5 className="text-uppercase">unitedhvac@me.com</h5>
            <h5>(847)-489-4796</h5>
            {/* <SocialMedia /> */}
            <h5 className="mt-2">Social Media: Coming Soon!</h5>
            <SocialMedia />
        </div>
    );
}

export default ContactIcon;
import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import SocialMedia from './SocialMedia'


function ContactIcon() {

    return (
        <Jumbotron fluid className="bg-white w-100 h-100 border pl-3 pr-3">
            <h6>Email: unitedhvac@me.com</h6>
            <h6>Phone: (847) 489 4796</h6>
            {/* <SocialMedia /> */}
            <h6 className="mt-5">Social Media Coming Soon!</h6>
        </Jumbotron>
    );
}

export default ContactIcon;
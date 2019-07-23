import React from 'react'
import { Jumbotron, Col, Button } from 'react-bootstrap'
import "./ContactLink.css"

function ContactLink(props) {
    return (
        <Jumbotron className="d-flex flex-column align-items-center mb-3 contactjumbo">
            <h2 className="mb-3 text-center text-white">Get Started with our Service Today!</h2>
            <p className="mb-3 text-white">Fill out our online form to be placed on the schedule right away, or contact us via e-mail or phone.</p>
            <Button href="/contact" className="border-0 btn-lg shadow hoverable" variant={props.color}>Get Started</Button>
        </Jumbotron>
    );
}

export default ContactLink
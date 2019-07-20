import React from 'react'
import { Jumbotron, Col, Button } from 'react-bootstrap'

function ContactLink(props) {
    return (
            <Jumbotron className="d-flex flex-column align-items-center mb-0">
                <h2>Get Started With Our Service Today!</h2>
                <p>Fill out our online form to be placed on the schedule right away, or contact us via e-mail or phone.</p>
                <Button href="/contact" size="lg" className="border-0 btn-block shadow hoverable" variant={props.color}>Get Started</Button>
            </Jumbotron>
    );
}

export default ContactLink
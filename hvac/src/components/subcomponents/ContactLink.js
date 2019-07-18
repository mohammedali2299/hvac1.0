import React from 'react'
import { Jumbotron, Col, Button } from 'react-bootstrap'

function ContactLink(props) {
    return (
        <Col>
            <Jumbotron className="col-centered mb-0">
                <h2>Get Started with our Service Today!</h2>
                <p>Fill out our online form to be placed on the schedule right away, or contact us via e-mail or phone.</p>
                <Button href="/contact" className="border-0 btn-lg btn-block shadow hoverable" variant={props.color}>Get Started</Button>
            </Jumbotron>
        </Col>
    );
}

export default ContactLink
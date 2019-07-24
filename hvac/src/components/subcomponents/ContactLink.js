import React from 'react'
import { Jumbotron, Col, Button } from 'react-bootstrap'
import "./ContactLink.css"

function ContactLink(props) {
    return (
        <Jumbotron fluid className="d-flex flex-column align-items-center mb-0 contactjumbo pt-3 pb-3 h-100">
            <h2 className="mb-3 pt-2 text-center text-white pl-3 pr-3">Get Started Today!</h2>
            <p className="mb-3 text-center font-italic text-white pl-3 pr-3 pt-3 pb-3">Fill out our online form to be placed on the schedule right away, or contact us via e-mail or phone.</p>
            <Button href="/contact" className="border-0 mb-2 btn-lg shadow contact-button">Get Started</Button>
        </Jumbotron>
    );
}

export default ContactLink
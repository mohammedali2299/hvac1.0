import React from 'react'
import { Jumbotron, Col, Button } from 'react-bootstrap'
import "./ContactLink.css"

function ContactLink(props) {
    return (
        <Jumbotron fluid className="border d-flex flex-column align-items-center mb-0 contactjumbo pt-3 pb-3 h-100">
            <h2 className="mb-3 pt-2 text-center text-white pl-3 pr-3">Get Started Today!</h2>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-3 pb-3">Fill out our online form or contact us via email or phone to get started. We are also happy to answer any questions about our services.</p>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-3 pb-3">give a description of what they should ask on the form</p>
            <Button href="/contact" className="border-0 mb-2 btn-lg shadow contact-button">Get Started</Button>
        </Jumbotron>
    );
}

export default ContactLink
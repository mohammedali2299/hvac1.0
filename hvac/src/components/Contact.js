import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Contact.css'
import ContactForm from "./subcomponents/ContactForm"

function Contact() {
    return(
        <Container fluid={true}>
            <Row className="bg-light p-4">
                <Col sm={12} md={6} className="border-right">
                    <h5>Fill out our online scheduling form to place an order for a job in just a few simple steps and we will get back to you at our earliest convenience. You can also contact us via email or phone.</h5>
                </Col>
                <Col sm={12} md={6}>
                    <h5>Phone Number: 555-3234-221</h5>
                    <h5>Email: unhvac@gmail.com</h5>
                    <h5>Social Media: Comming Soon!</h5>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3"> 
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact
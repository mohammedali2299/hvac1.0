import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import './Emergency.css'
import ContactForm from "./subcomponents/ContactForm"

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            <Row>
                <Col xs={12} lg={5} className="mb-4">
                    <Row noGutters className="shadow-element">
                        <Col xs={12} md={6} lg={12}>
                            <Jumbotron fluid className="mb-0 h-100 worker text-white">
                                <h4 className="font-weight-bold ml-3 mr-3 text-center">Help is Just a Few Clicks Away!</h4>
                                <p className="ml-5 mr-5 mt-3 text-center font-italic">Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. 
                                    Leave the problem to us and your life will return to normal before you know it. Satistfaction guaranteed.</p>
                            </Jumbotron>
                        </Col>
                        <Col xs={12} md={6} lg={12}>
                            <Jumbotron fluid className="mb-0 h-100 bg-white">
                                <h3 className="text-center  ml-4 mr-4">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. 
                                You can also call us at (847) 489 4796 or email us at <a className="yellow-text" href="mailto:unitedhvac@me.com">unitedhvac@me.com</a></h3>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={{offset: 2, span: 8}} lg={{ offset: 1, span: 5}} className="mb-4">
                    <ContactForm name="emergency" />
                </Col>
            </Row>
        </Container>
    );
}

export default Emergency
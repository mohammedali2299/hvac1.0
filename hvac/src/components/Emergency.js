import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import './Emergency.css'
import Carousel from './CustomCarousel'

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            <Row>
                <Col xs={12} lg={5} className="mb-4">
                    <Row noGutters>
                        <Col xs={12} md={6} lg={12}>
                            <Jumbotron fluid className="mb-0 h-100 worker text-white border">
                                <h4 className="font-weight-bold ml-3 mr-3 text-center">Help is Just a Few Clicks Away!</h4>
                                <p className="ml-5 mr-5 mt-3 text-center font-italic">Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. 
                                    Leave the problem to us and your life will return to normal before you know it. Satistfaction guaranteed.</p>
                            </Jumbotron>
                        </Col>
                        <Col xs={12} md={6} lg={12}>
                            <Jumbotron fluid className="mb-0 h-100 emergency-text border">
                                <h3 className="text-center text-white ml-4 mr-4">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. 
                                You can also call us at (847) 489 4796 or email us at <a href="mailto:unitedhvac@me.com">unitedhvac@me.com</a></h3>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={{offset: 2, span: 8}} lg={{ offset: 1, span: 5}} className="mb-4">
                    <Jumbotron fluid className="mb-0 mt-0 pt-0 bg-white">
                        <Form>
                            <Form.Label><h3 className="mb-3 ">Emergency Contact Form</h3></Form.Label>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column lg={2}>Name</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="text" className="emergency-border" placeholder="First and Last Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="phone">
                                <Form.Label column lg={2}>Phone</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="tel" className="emergency-border" placeholder="xxx-xxx-xxxx"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column lg={2}>Email</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="email" className="emergency-border" placeholder="example@gmail.com"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="address">
                                <Form.Label column lg={2}>Address</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="text" className="emergency-border" placeholder="5343 Cherry Tree Lane" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="city">
                                <Form.Label column lg={2}>City</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="text" className="emergency-border" placeholder="Chicago" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="state">
                                <Form.Label column lg={2}>State</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="text" className="emergency-border" placeholder="IL" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="zip">
                                <Form.Label column lg={2}>Zipcode</Form.Label>
                                <Col md={12} lg={10}>
                                    <Form.Control type="text" className="emergency-border mb-2" size="5" placeholder="99999" />
                                    <small>We will never share your personal information.</small>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="description" className="mt-2">
                                <Form.Label column lg={2}></Form.Label>
                                <Col md={12} lg={10}>
                                <Form.Control as="textarea" className="emergency-border" rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col lg={{offset: 2, span: 3}}>
                                    <Button className="submit border-0 btn-lg shadow" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Emergency
import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, Image } from 'react-bootstrap'
import './Emergency.css'
import Carousel from './CustomCarousel'

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            <Row>
                <Col>
                    <Jumbotron className="d-flex flex-column justify-content-center mb-0">
                        <h4 className="text-center">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. You can also call us at (333) 222-4444 or email us at unitedhv@gmail.com.</h4>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={4} className="mt-3">
                    <Jumbotron className="mb-0 worker text-white">
                        <h4 className="font-weight-bold">Help is Just a Few Clicks Away!</h4>
                        <p>Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. Leave the problem to us and your life will return to normal before you know it, satistfaction guaranteed.</p>
                    </Jumbotron>
                </Col>
                <Col xs={12} lg={8} className="mt-3">
                    <Jumbotron className="mb-0">
                        <Form>
                            <Form.Label className="border-bottom"><h5>Emergency Contact Form</h5></Form.Label>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column lg={2}>Name</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="First and Last Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="phone">
                                <Form.Label column lg={2}>Phone</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="tel" placeholder="xxx-xxx-xxxx"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column lg={2}>Email</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="email" placeholder="example@gmail.com"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="address">
                                <Form.Label column lg={2}>Address</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="5343 Cherry Tree Lane" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="city">
                                <Form.Label column lg={2}>City</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="Chicago" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="state">
                                <Form.Label column lg={2}>State</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" placeholder="IL" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="zip">
                                <Form.Label column lg={2}>Zipcode</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" size="5" placeholder="99999" />
                                </Col>
                            </Form.Group>
                            <small>We will never share your personal information.</small>
                            <Form.Group as={Row} controlId="description" className="mt-4">
                                <Form.Label column lg={2}>What is your emergency?</Form.Label>
                                <Col md={10}>
                                <Form.Control as="textarea" rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Emergency
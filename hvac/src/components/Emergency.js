import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import './Emergency.css'
import Carousel from './CustomCarousel'

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            {/* <Row>
                <Col>
                    <Jumbotron className="d-flex flex-column justify-content-center mb-0">
                        <h4 className="text-center">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. 
                        You can also call us at (847) 489 4796 or email us at unitedhvac@me.com.</h4>
                    </Jumbotron>
                </Col>
            </Row> */}
            <Col>
            <Row>
                <Col xs={12} md={12}>
                    <Col xs={12} md={6}>
                        <Jumbotron className="mb-0 worker text-white">
                            <h4 className="font-weight-bold">Help is Just a Few Clicks Away!</h4>
                            <p>Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. 
                                Leave the problem to us and your life will return to normal before you know it. Satistfaction guaranteed.</p>
                        </Jumbotron>
                    </Col>
                    <Col xs={12} md={6}>
                        <Jumbotron className="d-flex flex-column justify-content-center">
                            <h4 className="text-center">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. 
                            You can also call us at (847) 489 4796 or email us at <a href="mailto:unitedhvac@me.com">unitedhvac@me.com</a></h4>
                        </Jumbotron>
                    </Col>
                </Col>
            </Row>
                <Col xs={12} md={12}>
                    <Jumbotron className="mb-0 mt-0 pt-1 bg-white">
                        <Form>
                            <Form.Label className="mb-5 mt-0"><h3>Emergency Contact Form</h3></Form.Label>
                            <Form.Group as={Row} controlId="name">
                                <Form.Label column lg={2}>Name</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" className="border border-danger" placeholder="First and Last Name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="phone">
                                <Form.Label column lg={2}>Phone</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="tel" className="border border-danger" placeholder="xxx-xxx-xxxx"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="email">
                                <Form.Label column lg={2}>Email</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="email" className="border border-danger" placeholder="example@gmail.com"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="address">
                                <Form.Label column lg={2}>Address</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" className="border border-danger" placeholder="5343 Cherry Tree Lane" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="city">
                                <Form.Label column lg={2}>City</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" className="border border-danger" placeholder="Chicago" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="state">
                                <Form.Label column lg={2}>State</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" className="border border-danger" placeholder="IL" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="zip">
                                <Form.Label column lg={2}>Zipcode</Form.Label>
                                <Col md={10}>
                                    <Form.Control type="text" className="border border-danger mb-2" size="5" placeholder="99999" />
                                    <small>We will never share your personal information.</small>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="description" className="mt-2">
                                <Form.Label column lg={2}>What is your emergency?</Form.Label>
                                <Col md={10}>
                                <Form.Control as="textarea" className="border border-danger" rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                                </Col>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Jumbotron>
                </Col>
            </Col>
            
            {/* <Row>
                <Col xs={12} lg={4} className="d-flex flex-lg-column">
                    <Col xs={12} md={6} >
                        
                    </Col>
                    <Col xs={12}>
                        
                    </Col>
                </Col>
                <Col xs={12} lg={8} >
                    
                </Col>
            </Row> */}
        </Container>
    );
}

export default Emergency
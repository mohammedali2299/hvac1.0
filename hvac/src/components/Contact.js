import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form } from 'react-bootstrap'
import './Contact.css'

function Contact() {
    return(
        <Container fluid={true}>
            <Row className="bg-light p-4">
                <Col sm={12} md={6} className="border-right">
                    <h5>Fill out our online scheduling form to place an order for a job in just a few simple steps and we will get back to you at our earliest convenience. You can also contact us via e-mail or phone.</h5>
                </Col>
                <Col sm={12} md={6}>
                    <h5>Phone Number: 555-3234-221</h5>
                    <h5>E-Mail: unhvac@gmail.com</h5>
                    <h5>Social Media: Comming Soon!</h5>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3"> 
                    <Jumbotron>
                        <Form>
                            <Form.Row>
                                <Col sm={12} md={6}>
                                    <Form.Label className="border-bottom"><h5>Costumer Info</h5></Form.Label>
                                    <Form.Group as={Row} controlId="name">
                                        <Form.Label column md={2}>Name</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text" placeholder="First and Last Name" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="phone">
                                        <Form.Label column md={2}>Phone Number</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="tel" placeholder="xxx-xxxx-xxx"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="email" className="border-bottom">
                                        <Form.Label column md={2}>E-Mail Address</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="email" placeholder="example@gmail.com"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="address">
                                        <Form.Label column md={2}>Street Address</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="city">
                                        <Form.Label column md={2}>City</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="state">
                                        <Form.Label column md={2}>State</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="country">
                                        <Form.Label column md={2}>Country</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="zip">
                                        <Form.Label column md={2}>Zip code</Form.Label>
                                        <Col md={10}>
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>
                                    <small>We will never share your personal information.</small>
                                </Col>
                                <Col sm={12} md={6} className="">
                                    <Form.Label className="border-bottom"><h5>Service Info</h5></Form.Label>

                                
                                </Col>
                            </Form.Row>
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact
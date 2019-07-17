import React from "react"
import { Jumbotron, Container, Row, Col, Form, Button } from 'react-bootstrap'

function ContactForm() {
    return (
        <Jumbotron>
            <Form>
                <Form.Row>
                    <Col sm={12} md={5} className="mb-5">
                        <Form.Label className="border-bottom"><h5>Costumer Info</h5></Form.Label>
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
                    </Col>
                    <Col sm={12} md={{ span: 6, offset: 1}} className="">
                        <Form.Label className="border-bottom"><h5>Service Info</h5></Form.Label>
                        <Form.Group as={Row} controlId="emergency">
                            <Form.Check label="Emergency"/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="rescom">
                            <Form.Check type="radio" label="Residential" name="rescom" id="residential" />
                            <Form.Check type="radio" label="Commercial" name="rescom" id="commercial" className="ml-3" /> 
                        </Form.Group>
                        <Form.Group as={Row} controlId="services">
                            <Form.Check type="radio" label="Cooling" name="services" id="cooling" />
                            <Form.Check type="radio" label="Heating" name="services" id="heating" className="ml-3" />
                            <Form.Check type="radio" label="Ducting" name="services" id="ducting" className="ml-3"/>
                            <Form.Check type="radio" label="Electrical" name="services" id="electrical" className="ml-3"/>
                            <Form.Check type="radio" label="Other" name="services" id="otherService" className="ml-3"/>
                        </Form.Group>
                        <Form.Group as={Row} controlId="description">
                            <Form.Label>How can we help?</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                        </Form.Group>

                        <Row>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Row>
                    </Col>
                </Form.Row>
            </Form>
        </Jumbotron>
    );
}


export default ContactForm
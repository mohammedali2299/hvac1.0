import React from "react"
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'

function ContactForm() {
    return (
        <Jumbotron fluid className="mb-0 mt-0 pt-0 bg-white">
            <Form>
                <Form.Label><h3 className="mb-3 ">Emergency Contact Form</h3></Form.Label>
                <Form.Group as={Row} controlId="name">
                    <Form.Label column lg={1}>Name</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="text" className="emergency-border" placeholder="First and Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column lg={1}>Phone</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="tel" className="emergency-border" placeholder="xxx-xxx-xxxx"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column lg={1}>Email</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="email" className="emergency-border" placeholder="example@gmail.com"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                    <Form.Label column lg={1}>Address</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="text" className="emergency-border" placeholder="5343 Cherry Tree Lane" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="city">
                    <Form.Label column lg={1}>City</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="text" className="emergency-border" placeholder="Chicago" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="state">
                    <Form.Label column lg={1}>State</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="text" className="emergency-border" placeholder="IL" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="zip">
                    <Form.Label column lg={1}>Zipcode</Form.Label>
                    <Col md={12} lg={11}>
                        <Form.Control type="text" className="emergency-border mb-2" size="5" placeholder="99999" />
                        <small>We will never share your personal information.</small>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="rescom">
                    <Col xs={3} md={2} lg={{ offset: 1, span: 2 }} xl={1}>
                        <Form.Check type="radio" label="Residential" name="rescom" id="residential" />
                    </Col>
                    <Col xs={3} md={2} xl={1}>
                        <Form.Check type="radio" label="Commercial" name="rescom" id="commercial" /> 
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="description" className="mt-2">
                    <Form.Label column lg={1}></Form.Label>
                    <Col md={12} lg={11}>
                    <Form.Control as="textarea" className="emergency-border" rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                    </Col>
                </Form.Group>
                <Row>
                    <Col lg={{offset: 1, span: 3}}>
                        <Button className="submit border-0 btn-lg shadow" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Jumbotron>
    );
}


export default ContactForm
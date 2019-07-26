import React from "react"
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'

function ContactForm(props) {
    var title;

    if(props.name === "emergency") {
        title = "Emergency Contact Form"
    } else if(props.name === "contact") {
        title = "Contact Form"
    }

    return (
        <Jumbotron fluid className="mb-0 mt-0 pt-0 bg-white">
            <h3 className={props.name + "-text mb-3 pt-2 pb-2 pl-2 pr-5 text-white rounded"}>{title}</h3>
            <Form>
                <Form.Group as={Row} controlId="name">
                    <Form.Label column xs={2} >Name</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="text" className={props.name + "-border"} placeholder="First and Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column xs={2} >Phone</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="tel" className={props.name + "-border"} placeholder="xxx-xxx-xxxx"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="email">
                    <Form.Label column xs={2} >Email</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="email" className={props.name + "-border"} placeholder="example@gmail.com"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                    <Form.Label column xs={2} >Address</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="text" className={props.name + "-border"} placeholder="5343 Cherry Tree Lane" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="city">
                    <Form.Label column xs={2}>City</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="text" className={props.name + "-border"} placeholder="Chicago" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="state">
                    <Form.Label column xs={2}>State</Form.Label>
                    <Col xs={10}>
                        <Form.Control type="text" className={props.name + "-border"} placeholder="IL" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="zip">
                    <Form.Label column xs={2} >Zipcode</Form.Label>
                    <Col xs={10} >
                        <Form.Control type="text" className={props.name + "-border mb-2"} size="5" placeholder="99999" />
                        <small>We will never share your personal information.</small>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="rescom">
                    <Col xs={{ offset: 2, span: 10 }} className="d-flex">
                        <Form.Check type="radio" label="Residential" className="mr-4" name="rescom" id="residential" />
                        <Form.Check type="radio" label="Commercial" name="rescom" id="commercial" /> 
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="description" className="mt-2">
                    <Col xs={{ offset: 2, span: 10 }}  >
                    <Form.Control as="textarea" className={props.name + "-border"} rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                    </Col>
                </Form.Group>
                <Row>
                    <Col xs={{ offset: 2 }} >
                        <Button className={props.name + "-submit border-0 btn-lg shadow"} type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Jumbotron>
    );
}


export default ContactForm
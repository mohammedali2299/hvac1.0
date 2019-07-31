import React, { Component } from "react"
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'

class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);
    
        var this.title;

        if(props.name === "emergency") {
            this.title = "Emergency Contact Form"
        } else if(props.name === "contact") {
            this.title = "Contact Form"
        }
    
        this.state = {
            index: 0,
            direction: null,


        };
    }




    render() {
        return (
            <Jumbotron fluid className="mb-0 mt-0 pt-0 bg-white shadow-element">
                <h3 className={props.name + "-text mb-3 pt-2 pb-2 pl-3 pr-5 text-white rounded"}>{this.title}</h3>
                <Form className="pr-3 pl-3">
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
                    <Form.Group as={Row} controlId="rescom d-flex">
                        <Form.Check type="radio" label="Residential" className="mr-2 ml-3" name="rescom" id="residential" />
                        <Form.Check type="radio" label="Commercial" name="rescom" id="commercial" /> 
                    </Form.Group>
                    <Form.Group as={Row} controlId="services d-flex">
                        <Form.Check label="Cooling" name="services" id="cooling" className="ml-3" />
                        <Form.Check label="Heating" name="services" id="heating" className="ml-2" />
                        <Form.Check label="Ducting" name="services" id="ducting" className="ml-2"/>
                        <Form.Check label="Electrical" name="services" id="electrical" className="ml-2"/>
                        <Form.Check label="Other" name="services" id="otherService" className="ml-2"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="description" className="mt-2">
                        <Col xs={{ offset: 0, span: 12 }}  >
                        <Form.Control as="textarea" className={props.name + "-border"} rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col xs={{ offset: 0}} >
                            <Button className={props.name + "-submit border-0 btn-lg shadow"} type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Jumbotron>
        );
    }
    
}


export default ContactForm
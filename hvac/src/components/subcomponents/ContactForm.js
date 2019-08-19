import React, { Component } from "react"
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

class ContactForm extends Component {
    constructor(props) {
        super(props);
    

        if(props.name === "emergency") {
            this.title = "Emergency Contact Form"
        } else if(props.name === "contact") {
            this.title = "Contact Form"
        }
    
        this.state = {
            name: '',
            phone: '',
            email: '',
            rescom: '',
            cooling: false,
            heating: false,
            electrical: false,
            ducting: false,
            other: false,
            description: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResCom = this.handleResCom.bind(this);
        this.handleServices = this.handleServices.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleResCom = e => {
        this.setState({ rescom: e.target.id });
    }

    handleServices = e => {
        this.setState({ [e.target.id]: e.target.checked });
    }

    async handleSubmit(e) {
        e.preventDefault();


        const { name, phone, email, rescom, cooling, heating, electrical, ducting, other, description } = this.state;

        const form = await axios.post('/api/form', {
            name,
            phone,
            email,
            rescom,
            cooling,
            heating,
            electrical,
            ducting,
            other,
            description
        });
    }

    render() {
        return (
            <Jumbotron fluid className="mb-0 mt-0 pt-0 bg-white shadow-element">
                <h3 className={this.props.name + "-text mb-3 pt-2 pb-2 pl-3 pr-5 text-white rounded"}>{this.title}</h3>
                <Form onSubmit={this.handleSubmit} className="pr-3 pl-3">
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column xs={2} >Name</Form.Label>
                        <Col xs={10} >
                            <Form.Control type="text" onChange={this.handleChange} className={this.props.name + "-border"} placeholder="First and Last Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="phone">
                        <Form.Label column xs={2} >Phone</Form.Label>
                        <Col xs={10} >
                            <Form.Control type="tel" onChange={this.handleChange} className={this.props.name + "-border"} placeholder="xxx-xxx-xxxx"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="email">
                        <Form.Label column xs={2} >Email</Form.Label>
                        <Col xs={10} >
                            <Form.Control type="email" onChange={this.handleChange} className={this.props.name + "-border"} placeholder="example@gmail.com"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Check type="radio" onClick={this.handleResCom} label="Residential" className="mr-2 ml-3" name="rescom" id="residential" />
                        <Form.Check type="radio" onClick={this.handleResCom} label="Commercial" name="rescom" id="commercial" /> 
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Check label="Cooling" onChange={this.handleServices} name="services" id="cooling" className="ml-3" />
                        <Form.Check label="Heating" onChange={this.handleServices} name="services" id="heating" className="ml-2" />
                        <Form.Check label="Ducting" onChange={this.handleServices} name="services" id="ducting" className="ml-2"/>
                        <Form.Check label="Electrical" onChange={this.handleServices} name="services" id="electrical" className="ml-2"/>
                        <Form.Check label="Other" onChange={this.handleServices} name="services" id="other" className="ml-2"/>
                    </Form.Group>
                    <Form.Group as={Row} controlId="description" className="mt-2">
                        <Col xs={{ offset: 0, span: 12 }}  >
                        <Form.Control as="textarea" onChange={this.handleChange} className={this.props.name + "-border"} rows="5" placeholder="Write a description of the issue and we will get back to you as soon as possible." />
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col xs={{ offset: 0}} >
                            <Button className={this.props.name + "-submit border-0 btn-lg shadow"} type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Jumbotron>
        );
    }
    
}


export default ContactForm
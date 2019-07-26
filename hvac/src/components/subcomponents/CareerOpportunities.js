import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import './CareerOpportunities.css'

function CareerOpportunities() {
    return(
        <Container fluid className="body">
            <Row>
                <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
                <Jumbotron className="bg-white pt-1">
                    <Form>
                    <Form.Row>
                        <Col xs={12} className="mb-5">
                            <Form.Label className="border-bottom"><h5>Employee info</h5></Form.Label>
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
                            <Form.Group as={Row} controlId="description">
                                <Form.Label column lg={2}>Tell us about yourself</Form.Label>
                                <Col md={10}>
                                    <Form.Control as="textarea" rows="5" placeholder="Include any experience you've had with HVAC installations, repairs, and maintainence."/>
                                </Col>
                                
                            </Form.Group>
                            <small>We will never share your personal information.</small>
                            
                            <Row className="mt-2 ml-1">
                                <Button className="submit-button border-0" type="submit">Submit</Button>
                            </Row>
                        </Col>
                    </Form.Row>
                    </Form>
                    </Jumbotron>
                </Col>

                <Col fluid xs={{span:8, order:1}} lg={{offset:1, span:5}}>
                    <Jumbotron className="mt-4 ml-2">
                        <h5>HVAC Technician Job</h5>
                        <div className="pt-3">
                            Become a part of our growing company. Just fill out our form and make sure to include any previous jobs 
                            or expereince you've had in the HVAC/Electrical field. Due to the wide variety of services we offer 
                            and our expereince in the business, we can provide many learning opportunities to help expand your skillset. 
                        </div>
                    </Jumbotron>
                    
                    {/* <Image src="/extras/galleryimg4.jpg" className="h-75 w-75 rounded"></Image> */}
                </Col>
            </Row>
           
        
        </Container>
    );
}

export default CareerOpportunities
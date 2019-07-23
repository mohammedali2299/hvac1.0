import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

function CareerOpportunities() {
    return(
        <Container className="body">
            <Jumbotron>
            <Row>
                <Col>
                    <Form>
                    <Form.Row>
                        <Col sm={12} md={6} className="mb-5">
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
                            
                            <Row className="mt-2 ml-2">
                                <Button variant="primary" type="submit">Submit</Button>
                            </Row>
                        </Col>
                    </Form.Row>
                    </Form>
                </Col>
                {/* <Col>
                    <Image src="extras/emergency-worker.jpg"></Image>
                </Col> */}
            </Row>
           
        </Jumbotron>
        </Container>
    );
}

export default CareerOpportunities
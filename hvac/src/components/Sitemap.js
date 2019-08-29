import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Sitemap.css'

function Sitemap() {
    return(
        <Container fluid className="pt-2 shadow-element map">
            <Row className="mt-4">

                <Col xs={4}> 
                <div>
                    <h5 className="font-weight-bold">GENERAL</h5>
                    <ul className="list-unstyled">
                    <hr/>
                        <li>
                            <a href="/" className="text-muted">Home</a> 
                        </li>
                        <li>
                            <a href="/faq" className="text-muted">FAQ</a> 
                        </li>
                        <li>
                            <a href="/career-opportunities" className="text-muted">Career opportunities</a>
                        </li>
                    </ul>
                    <Image width={140} height={80} className="" src="/extras/LOGO2.jpg"/>
                </div>
                    
                </Col>
                <Col xs={4}>
                    <div>
                        <h5 className="font-weight-bold">SERVICES</h5>
                        <ul className="list-unstyled">
                        <hr/>
                            <li>
                                <a href="/cooling" className="text-muted">Cooling</a>
                            </li>
                            <li>
                                <a href="/heating" className="text-muted">Heating</a>
                            </li>
                            <li>
                                <a href="/ducting" className="text-muted">Ducting</a>
                            </li>
                            <li>
                                <a href="/electrical" className="text-muted">Electrical</a>
                            </li>
                            <li>
                                <a href="/emergency-services" className="text-muted">Emergency Services</a>
                            </li>
                        </ul> 
                    </div>
                    
                </Col>
                <Col xs={4}>
                    <div>
                        <h5 className="font-weight-bold">COMPANY</h5>
                        <ul className="list-unstyled ">
                        <hr/>
                            <li>
                                <a href="/about" className="text-muted">About the Business</a>
                            </li>
                            <li>
                                <a href="/owner" className="text-muted">About the Owner</a>
                            </li>
                            <li>
                                <a href="/gallery" className="text-muted">Gallery</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-muted">Contact</a>
                            </li>
                            <li>
                                <p>  </p>
                            </li>
                            <Button href="/contact" className="contact-submit border-0">Contact</Button>
                        </ul>
                    </div> 
                </Col>
            </Row>
            <Row fluid="true" className="source bg-dark pl-3">
                <small className="text-light">Copyright @2019 United HVAC and Electrical Inc. This website is brought to you by STREAMLINE</small>
            </Row>
        </Container>
        
    );
}

export default Sitemap
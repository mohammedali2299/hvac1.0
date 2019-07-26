import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Sitemap.css'

function Sitemap() {
    return(
        <Container fluid className="mt-3">
            <Row>
                <Col xs={4}> 
                    <h5 className="pl-4 font-weight-bold">GENERAL</h5>
                    <ul className="list-unstyled pl-4">
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
                    <Image width={140} height={95} className="ml-4" src="/extras/yellowLOGO.jpg"/>
                </Col>
                <Col xs={4}>
                    <h5 className="pl-4 font-weight-bold">SERVICES</h5>
                    <ul className="list-unstyled pl-4">
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
                </Col>
                <Col xs={4}>
                     <h5 className="pl-4 font-weight-bold">COMPANY</h5>
                    <ul className="list-unstyled pl-4">
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
                        <li>
                            <h5><a className="yellow-text" href="mailto:unitedhvac@me.com">unitedhvac@me.com</a></h5>
                        </li>
                        <li>
                            <h5 className="text-dark disabled">(847) 489 4796</h5>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row fluid className="source bg-dark pl-3">
                <small className="text-light">Copyright @2019 United HVAC and Electrical Inc. This website is brought to you by STREAMLINE</small>
            </Row>
        </Container>
        
    );
}

export default Sitemap
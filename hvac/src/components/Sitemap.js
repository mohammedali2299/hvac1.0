import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Sitemap.css'

function Sitemap() {
    return(
        <Container fluid className="mt-5">
            <hr/>
            <Row>
                <Col xs={4}>
                    <h5 className="pl-4 font-weight-bold">SERVICES</h5>
                    <ul className="list-unstyled pl-4">
                    <hr/>
                        <li>
                            <a href="/cooling">Cooling</a>
                        </li>
                        <li>
                            <a href="/heating">Heating</a>
                        </li>
                        <li>
                            <a href="/ducting">Ducting</a>
                        </li>
                        <li>
                            <a href="/electrical">Electrical</a>
                        </li>
                    </ul> 
                </Col>
                <Col xs={4}> 
                    <h5 className="pl-4 font-weight-bold">GENERAL</h5>
                    <ul className="list-unstyled pl-4">
                    <hr/>
                        <li>
                            <a href="/residential">Residential</a>
                        </li>
                        <li>
                            <a href="/commercial">Commercial</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a> 
                        </li>
                        
                    </ul>
                </Col>
                <Col xs={4}>
                     <h5 className="pl-4 font-weight-bold">COMPANY</h5>
                    <ul className="list-unstyled pl-4">
                    <hr/>
                        <li>
                            <a href="/about">About the Business</a>
                        </li>
                        <li>
                            <a href="/owner">About the Owner</a>
                        </li>
                        <li>
                            <a href="/gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/career-opportunities">Career opportunities</a>
                        </li>
                        <li>
                            <p>  </p>
                        </li>
                        <li>
                            <h5 className="text-dark disabled">unitedhv@gmail.com</h5>
                        </li>
                        <li>
                            <h5 className="text-dark disabled">(333) 444 5555</h5>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Sitemap
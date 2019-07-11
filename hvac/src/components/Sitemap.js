import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, Footer } from 'react-bootstrap'
import './Sitemap.css'

function Sitemap() {
    return(
        <Container className="body sitemap">
            <hr/>
            <Row>
                <Col xs={4} className="sitemap-col">
                    <h4>About</h4>
                    <ul>
                        <li>
                            <Link to="/career-opportunities">Career opportunities</Link>
                        </li>
                        <li>
                            <Link to="/about">About the Business</Link>
                        </li>
                        <li>
                            <Link to="/owner">About the Owner</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} className="sitemap-col">
                    <h4>Services</h4>
                    <ul>
                        <li>
                            <Link to="/cooling">Cooling</Link>
                        </li>
                        <li>
                            <Link to="/heating">Heating</Link>
                        </li>
                        <li>
                            <Link to="/ducting">Ducting</Link>
                        </li>
                        <li>
                            <Link to="/electrical">Electrical</Link>
                        </li>
                    </ul> 
                </Col>
                <Col xs={4} className="sitemap-col"> 
                    <h4>General</h4>
                    <ul>
                        <li>
                            <Link to="/residential">Residential</Link>
                        </li>
                        <li>
                            <Link to="/commercial">Commercial</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link> 
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Sitemap
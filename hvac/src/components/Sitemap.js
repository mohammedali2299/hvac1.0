import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, Footer } from 'react-bootstrap'
import './Sitemap.css'

function Sitemap() {
    return(
        <Container fluid className="body sitemap bg-light">
            <hr/>
            <Row>
                <Col xs={4} className="sitemap-col">
                    <h4 className="mapTitle">About</h4>
                    <ul>
                        <li>
                            <a href="/career-opportunities">Career opportunities</a>
                        </li>
                        <li>
                            <a href="/about">About the Business</a>
                        </li>
                        <li>
                            <a href="/owner">About the Owner</a>
                        </li>
                        <li>
                            <a href="/gallery">Gallery</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} className="sitemap-col">
                    <h4 className="mapTitle">Services</h4>
                    <ul>
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
                <Col xs={4} className="sitemap-col"> 
                    <h4 className="mapTitle">General</h4>
                    <ul>
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
            </Row>
        </Container>
        
    );
}

export default Sitemap
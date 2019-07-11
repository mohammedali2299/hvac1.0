import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import './Home.css'
import Carousel from './CustomCarousel'
import Sitemap from './Sitemap'

function Home() {
    return(
        <div className="body">
            <Carousel /> 
            <Container fluid="true" className="bg-secondary">
                <Row className="jumbo-list bg-info" noGutters='true'>
                    <Col className="shadow">
                        <Link to="/install"><h2 className="jumbo-list-element">Install</h2></Link>
                    </Col>
                    <Col className="shadow">
                        <Link to="/repair"><h2 className="jumbo-list-element">Repair</h2></Link>
                    </Col>
                    <Col className="shadow">
                        <Link to="/maintain"><h2 className="jumbo-list-element">Maintain</h2></Link>
                    </Col>
                </Row>
                <Row className="home-about">
                    <Col>
                        <Jumbotron className="col-centered">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor.</p>
                            <Button href="/about" className="bg-info border border-info shadow hoverable">Read More</Button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="img-btn-container">
                        <Button href="/residential" className="shadow bg-secondary btn-sm border-0 res-com-btn">Residential</Button>
                        <Image fluid src="/extras/residential.jpg"className="bg res-com-img" rounded></Image>
                        
                    </Col>
                    <Col className="img-btn-container">
                        <Button href="/commercial" className="shadow bg-secondary btn-sm border-0 res-com-btn">Commercial</Button>
                        <Image fluid src="/extras/commercial.jpg"className="bg res-com-img" rounded></Image>
                    </Col>
                </Row>
                <Row className="home-contact">
                    <Col>
                        <Jumbotron className="col-centered">
                            <h2>Get Started with our Service Today!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button href="/contact" className="bg-info border-0 btn-lg btn-block shadow hoverable">Get Started</Button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="serv-img-btn-container">
                        <Button href="/cooling" className="border-0 serv-btn">
                            <h3>Cooling</h3>
                            <Image fluid src="/extras/cooling.jpg"className="serv-img"></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/heating" className="border-0 serv-btn">
                            <h3>Heating</h3>
                            <Image fluid src="/extras/heating.jpg"className="serv-img"></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/ducting" className="border-0 serv-btn">
                            <h3>Ducting</h3>
                            <Image fluid src="/extras/ducting.jpg"className="serv-img"></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/electrical" className="border-0 serv-btn">
                            <h3>Electrical</h3>
                            <Image fluid src="/extras/electrical.jpg"className="serv-img"></Image>
                        </Button>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home
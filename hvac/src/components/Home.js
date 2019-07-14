import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import './Home.css'
import Carousel from './CustomCarousel'
import IRMbutton from './subcomponents/IRMbuttons'



function Home() {
    return(
        <div className="body bg-light">
            <Carousel /> 
            <Container fluid>
                <IRMbutton color="primary" />
                <Row className="home-about">
                    <Col>
                        <Jumbotron className="col-centered">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor.</p>
                            <Button href="/about" className="bg-info border border-info shadow hoverable">Read More</Button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col className="w-75 d-flex justify-content-center img-btn-container">
                        <Button href="/residential" className="w-75 shadow bg-secondary btn-sm border-0 res-com-btn">
                            <h2>Residential</h2>
                            <Image fluid src="/extras/residential.jpg"className="w-75 bg res-com-img" rounded></Image>
                        </Button>
                        {/* <Image fluid src="/extras/residential.jpg"className="bg res-com-img" rounded></Image> */}
                        
                    </Col>
                    <Col className="w-75 d-flex justify-content-center img-btn-container">
                        <Button href="/commercial" className="w-75 shadow bg-secondary btn-sm border-0 res-com-btn">
                            <h2>Commercial</h2>
                            <Image fluid src="/extras/commercial.jpg"className="w-75 bg res-com-img" rounded></Image>
                        </Button>
                        {/* <Image fluid src="/extras/commercial.jpg"className="bg res-com-img" rounded></Image> */}
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
                        <Button href="/cooling" className="w-75 bg-primary border-0 serv-btn">
                            <h3>Cooling</h3>
                            <Image fluid src="/extras/cooling.jpg"className="serv-img rounded"></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/heating" className="w-75 bg-danger border-0 serv-btn">
                            <h3>Heating</h3>
                            <Image fluid src="/extras/heating.jpg"className="serv-img rounded"></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/ducting" className="w-75 bg-secondary border-0 serv-btn">
                            <h3>Ducting</h3>
                            <Image fluid src="/extras/ducting.jpg"className="serv-img" rounded></Image>
                        </Button>  
                    </Col>
                    <Col className="serv-img-btn-container">
                        <Button href="/electrical" className="w-75 bg-warning border-0 serv-btn">
                            <h3>Electrical</h3>
                            <Image fluid src="/extras/electrical.jpg"className="serv-img rounded"></Image>
                        </Button>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home
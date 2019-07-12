import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './About.css'

function About() {
    return(
        <Container className="body">
            <h1 className="page-title">About</h1>
            <Jumbotron className="col-centered">
            <Row>
                <Col xs={8}>
                    <h2 className="text-center heading">Providing Quality Service since 1996</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Duis ut diam quam nulla porttitor. Dui vivamus arcu felis 
                        bibendum ut. Vitae tortor condimentum lacinia quis. Nunc 
                        scelerisque viverra mauris in aliquam sem fringilla ut morbi. 
                        Eget gravida cum sociis natoque penatibus et magnis dis. 
                        Posuere lorem ipsum dolor sit amet consectetur adipiscing. 
                        Blandit turpis cursus in hac. Nam libero justo laoreet sit. 
                        Nec tincidunt praesent semper feugiat nibh sed pulvinar. 
                        Massa vitae tortor condimentum lacinia quis. Egestas pretium 
                        aenean pharetra magna ac placerat vestibulum lectus. Quis 
                        blandit turpis cursus in hac habitasse. Erat pellentesque 
                        adipiscing commodo elit at imperdiet dui accumsan sit. Tortor 
                        ae purus faucibus ornare suspendisse sed nisi. Est ultricies 
                        integer quis auctor elit sed vulputate. Fringilla est ullamcorper 
                        ulla facilisi etiam dignissim.</p>
                </Col>
                <Col>
                    <Button href="/owner" className="bg-white border-0">
                        <h4 className="text-center text-danger">CEO/Owner: Imran Ali Mirza</h4>
                        <Image src="/extras/owner.jpg" className="owner-img" rounded></Image>
                    </Button>
                    
                    
                </Col>
            </Row>
            </Jumbotron>
        </Container>
    );
}

export default About
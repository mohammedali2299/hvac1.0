import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './About.css'

function About() {
    const about = <p>Residential & commercial Heating, ventilation, Air conditioning installs & repairs, water heaters, tankless water heaters & electrical contractors. 
        We install & repair all brands!</p>

    return(
        <Container className="body">
            <h1 className="page-title">About</h1>
            <Jumbotron className="col-centered">
            <Row>
                <Col xs={8}>
                    <h2 className="text-center heading">Providing Quality Service since 1996</h2>
                    <div>
                        {about}
                    </div>
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
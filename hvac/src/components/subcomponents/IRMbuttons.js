import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import './IRMbuttons.css'


function IRMbuttons() {
    return(
        <Row>
            <Col xs={4}>
                <Button href="/install" className="btn-lg btn-block d-inline-flex bg-primary shadow">
                    <h4 className="mr-5">Install</h4>
                    <Image src="/extras/wrench.jpg" className="IRMpics"/>
                </Button>
            </Col>
            <Col xs={4}>
                <Button href="/repair" className="btn-lg btn-block d-inline-flex bg-primary shadow">
                    <h4 className="mr-5">Repair</h4>
                    <Image src="/extras/repair-clip.jpg" className="IRMpics"/>
                </Button>
            </Col>
            <Col xs={4}>
                <Button href="/maintain" className="btn-lg btn-block d-inline-flex bg-primary shadow">
                    <h4 className="mr-5">Maintain</h4>
                    <Image src="/extras/gears.jpg" className="IRMpics"/>
                </Button>
            </Col>
        </Row>
    );
}

export default IRMbuttons;
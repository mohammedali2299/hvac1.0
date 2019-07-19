import React from 'react';
import { Tab, Nav, Row, Col, Jumbotron } from 'react-bootstrap'
import './IRMtab.css'

function IRMtab(props) {
    return(
        <Jumbotron>
            <h3 className="mb-4">Air Conditioning Services Offered</h3>
            <Tab.Container defaultActiveKey="install">
            <Row>
                
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link eventKey="install">Install</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="repair">Repair</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="install">
                        <h5>Carrier Certified Air Conditioning Units</h5>
                        <p>We install the best of the best. Keep you cool in summer! .....</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="repair">
                        <h5>We can fix all AC models.</h5>
                        <p>Our experienced personel can fix all makes and models of central AC units for commercial and residential systems.</p>
                        <h5>Stress Free Emergency Service</h5>
                        <p>AC stopped working? Our exerienced team can restore life back to normal in no time.</p>
                    </Tab.Pane>
                </Tab.Content>
               
            </Row>
            </Tab.Container>
        </Jumbotron>
    );
}

export default IRMtab
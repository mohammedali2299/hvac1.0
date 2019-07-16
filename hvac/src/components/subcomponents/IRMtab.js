import React from 'react';
import { Tab, Nav, Row, Col, Jumbotron } from 'react-bootstrap'
import './IRMtab.css'

function IRMtab(props) {
    return(
        <Jumbotron>
            <h3 className="mb-4">Air Conditioning Services Offered</h3>
            <Tab.Container defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="install">Install</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="repair">Repair</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="maintain">Maintain</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content className="ml-3">
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
                    <Tab.Pane eventKey="maintain">
                        <h5>Everything you need to get the most out of your AC</h5>
                        <p>We clean AC coils to optimize your cooling experience. This allows your AC to last longer and use less energy to cool your house or business, saving you money everyday.</p>
                        <h5>Save on Future Repair Costs!</h5>
                        <p>By allowing us to preform maintanance on your AC unit, it will last longer saving you in future repair costs.</p>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </Jumbotron>
    );
}

export default IRMtab
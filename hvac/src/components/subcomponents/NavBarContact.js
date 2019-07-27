import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

function NavBarContact() {
    return (
        <Row fluid noGutters className="pt-3">
            <Col xs={12}>
                <h6>Phone: <a href="/contact">(847)-489-4796</a></h6>
            </Col>
            <Col xs={12}>
                <h6>Email: <a className="yellow-text" href="mailto:unitedhvac@me.com">unitedhvac@me.com</a></h6>
            </Col>
            <Col xs={12}>
                <h6>Social Media: Coming Soon!</h6>
            </Col>
        </Row>
    );
}

export default NavBarContact;
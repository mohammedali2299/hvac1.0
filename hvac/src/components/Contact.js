import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import ContactForm from "./subcomponents/ContactForm";

function Contact() {
  return (
    <Container fluid={true}>
      <Row className="cooling-primary p-4 shadow-element">
        <Col sm={12} md={6} className="text-white border-right">
          <h5>
            Fill out our online form in just a few simple steps and we will get
            back to you at our earliest convenience. You can also contact us via
            email or phone.
          </h5>
        </Col>
        <Col sm={12} md={6}>
          <h5 className="text-white">Phone Number: (847) 489 4796</h5>
          <h5 className="text-white">
            Email:{" "}
            <a className="yellow-text" href="mailto:unitedhvac@me.com">
              unitedhvac@me.com
            </a>
          </h5>
          <h5 className="text-white">Social Media: Coming Soon!</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={{ offset: 3, span: 6 }} className="mt-3">
          <ContactForm name="contact" />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

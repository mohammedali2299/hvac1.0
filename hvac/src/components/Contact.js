import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./Contact.css";
import ContactForm from "./subcomponents/ContactForm";
import ContactIcon from "./subcomponents/ContactIcon";

function Contact() {
  const [showSub, setShowSub] = useState(false);

  const handleSub = () => setShowSub(true);
  const handleClose = () => setShowSub(false);

  return (
    <>
      <Modal show={showSub} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Thank You!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>We have recieved your request. We will get back to you shortly.</Modal.Body>
        <Modal.Footer>
          <Button href="/" className="contact-submit border-0">Done</Button>
        </Modal.Footer>
      </Modal>
      <Container fluid={true}>
        <Row className="p-4 shadow-element">
          <Col sm={12} md={6} className="border-right">
            <h5 className="text-center mt-3">
              Fill out our online form in just a few simple steps and we will get
              back to you at our earliest convenience. You can also contact us via
              email or phone.
            </h5>
          </Col>
          <Col sm={12} md={6}>
            <ContactIcon />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={{ offset: 3, span: 6 }} className="mt-3">
            <ContactForm sub={handleSub} name="contact" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;

import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import "./Home.css";
import ResComTab from "./subcomponents/ResComTabs";
import ReviewCarousel from "./subcomponents/ReviewCarousel";
import ServiceLinks from "./subcomponents/ServiceLinks";
import { cpus } from "os";
import ServiceContact from "./subcomponents/ServiceContact";
import Carousel from "./subcomponents/InteractiveCarousel";
import ContactIcon from "./subcomponents/ContactIcon";

function Home() {
  return (
    <div className="body">
      <Container fluid className="pl-0 pr-0">
        <Row noGutters>
          <Col lg={3}>
            <ContactIcon />
          </Col>
          <Col lg={{ span: 9, offset: 0 }}>
            <Carousel name="home" />
          </Col>
        </Row>
        <Row noGutters className="mt-3">
          <Col xs={12} xl={4} className="pr-3 pl-3 mt-3 mb-3 pb-3">
            <ServiceContact name="home" color="cooling" />
          </Col>
          <Col xl={{ span: 8, offset: 0 }} className="mb-3 pr-3 pl-3">
            <ServiceLinks />
          </Col>
        </Row>
        <Row noGutters className="mb-3">
          <Col xs={12} xl={4} className="pr-3 pl-3 mt-3 mb-3">
            <ServiceContact name="emergency" color="heating" />
          </Col>
          <Col xs={12} xl={8} className="pr-3 pl-3 mt-3">
            <ResComTab />
          </Col>
        </Row>

        {/* <Row className="mt-4">
          <ReviewCarousel />
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;

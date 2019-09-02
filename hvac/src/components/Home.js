import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import ResComTab from "./subcomponents/ResComTabs";
import ServiceLinks from "./subcomponents/ServiceLinks";
import ServiceContact from "./subcomponents/ServiceContact";
import Carousel from "./subcomponents/InteractiveCarousel";
import ContactIcon from "./subcomponents/ContactIcon";
import Particles from 'react-particles-js'

function Home() {
  return (
    <div className="body">
      <Container fluid className="pl-0 pr-0">
          <Particles    
            canvasClassName="particles"
            className="particle-wrapper"   
            params={{
                particles: {
                  line_linked: {
            				color: '#000000'
                  },
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  }
                }
            }}
            // width='100%'
            height='100'

          />
        <Row noGutters>
          <Col lg={3} className="pt-5">
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
        <Row noGutters>
          <Col xs={12} xl={4} className="pr-3 pl-3 mt-3 mb-3">
            <ServiceContact name="emergency" color="heating" />
          </Col>
          <Col xs={12} xl={8} className="pr-3 pl-3 mb-3">
            <ResComTab />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import InteractiveCarousel from './subcomponents/InteractiveCarousel'
import './ResComTemplate.css'
import Gallery from './gallerycomponent/Gallery'

function ResComTemplate(props) {
    var title = props.name + " HVAC Services";
    var mainText;
    var startText;
    var imageList;
    
    if(props.name === "residential") {
        mainText = "Keep your home comfortable through United! We can help you choose the ac or furnace that is best suited to your home, saving you money on electricty and allowing you to regulate the temperature of your home more effectively. After that we offer a full hvac installation service so no work is required on your part to get a fully functional system. You can also get your electrical or hvac systems serviced by our technicians in no time."
        startText = "Order our service today, or ask us about a specific service we can do for you by pressing the Get Started button below."
    } else if(props.name === "commercial") {
        mainText = "Get all of your commercial hvac needs all in one place. We service apartments, businesses, and warehouses. We install full air conditioning, heating, ventilation, and electrical systems up to date with the latest technology for brand new buildings. We also repair or replace old or broken air conditioners, furnaces, ducting, or electrical systems in old or new buildings. By ordering our hvac service you are ensuring that your new hvac system is running efficiently and not wasting electricity and money trying to keep your building comfortable."
        startText = "To find out how we can help you with your hvac issue or to order our services now, click the Get Started button below to contact us online or via email or phone."
        imageList = ['/extras/commercial1.jpeg', '/extras/commercial2.jpeg', '/extras/commercial3.jpeg', '/extras/commercial4.jpeg', '/extras/commercial5.jpeg', '/extras/commercial6.jpeg', '/extras/commercial7.jpeg', '/extras/commercial8.jpeg', '/extras/commercial9.jpeg', '/extras/commercial10.jpeg'];
    }

    
    return(
        <Container fluid className="body m-0 pl-0 pr-0">
            <Row noGutters fluid className="m-0" >
                {/* <Col xs={12} className="mt-0">
                    <InteractiveCarousel name={props.name} />
                </Col> */}
                <Col xs={12} className="mt-3">
                    <Gallery images={{imageList}} />
                </Col>
                <Col xs={12} className="mt-3 mb-3 pl-5 pr-5">
                    <Jumbotron fluid className="p-0 m-0 bg-white shadow-element">
                        <h2 className="title-color text-white pr-2 pl-2 pt-3 pb-3 text-center w-100">{title.toUpperCase()}</h2>
                        <p className="mr-5 ml-5 mb-3 mt-4 p-medium">{mainText}</p>
                        <p className="mr-5 ml-5 mb-3 mt-4 p-medium">{startText}</p>
                        <Button href="/contact" className="button-color shadow-element btn-lg border-0 mt-4 mb-5 ml-5">Get Started</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default ResComTemplate
import React from 'react'
import { Container, Jumbotron, Row, Col} from 'react-bootstrap';

function FAQ() {
    return(
        <Container fluid className="body">
            <Jumbotron fluid className="shadow-element">
                <h2 className="pl-4 pr-4 heading">Frequently Asked Questions</h2>
                <Row className="mt-5">
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">Which HVAC system is best for me?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">This can depend on a variety of factors including the square footage and cubic footage of the structure 
                            as well how many floors you have. The ducting and infrastructure play a role in determining what works best so it's best to reach out to us 
                            throught the <a href="/contact">contact form</a> our experienced technician will come over to provide a profesional estimate.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">How much will it cost to replace my furnace/AC?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">Depending on type and size of the HVAC system your home/building has and, the price ranges between $4,000 upto $25,000 on average. 
                            With our dedication to excellence, your money is well spent because it's an investment in your daily life. 
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">When should I replace my furnace?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">Furnaces can last anywhere from 12-16 years. Some inidicators of a furnace that needs service include:
                            abnormally high heating or electrical bills, loud noises coming from the unit, cold spots in your home/business and if it's getting too old.
                            If you notice any burning odors then use the <a href="/emergency-services">emergency form</a> as soon as possible to reach us 
                            and we'll prioritize your service. 
                        </p>
                    </Col>          
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">Why is my AC not working?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">The most common reason for this is a shortage of refrigerant in your system, especially if you haven't 
                            had it replenished. Another reason may be that your condensor is dirty and isn't able to dissipate heat. In either case, it's a good idea to 
                            reach out to us using the <a href="/contact">contact form</a> and we'll be able to target your specific situation.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">What steps can I take to maintain efficiency in my HVAC system?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">An important part of preserving the quality of your system is to replace the filters on time. If you live alone
                            you need only replace it once every 6 months. The average "suburban home" should try to replace their filter every 3 months and 2 months if there are pets.
                            It's also a good idea to check your furnace for weird smells and fix any leaks in supply ducts a few times a year to catch any issues early. 
                        </p>
                    </Col>          
                    <Col xs={12} md={6}>
                        <h4 className="pl-5 pr-5">How does my HVAC system work?</h4>
                        <p className="mt-4 pl-5 pr-5 text-muted">
                            The furnace uses gas or oil to heat the air. The furnace has a heat exchanger which is the part of the furnace 
                            responsible for heating up the air to the right temperature. The air conditioner cools the air and is found outside of the house. It uses 
                            electricity and coolant to reduce the air temperature and send hot air out and keep cold air in. Ductwork is hot and cold air is transported 
                            through the interior of your home/business. The thermostat is how you control your system. It can turn your system on/off and control the air temperature.
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}

export default FAQ
import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import "./ServiceContact.css"

function ServiceContact(props) {
    var h2t;
    var p1t = "Ask us about estimates, services, or problem recomendations via the get started link below.";
    var p2t;
    var linkB = "/contact";
    
    if(props.name === "home") {
        h2t = "Get Started Today";
        p2t = "For more information on how we can help you specifically, click get started or check out some of the services we offer.";
    } else if(props.name === "emergency") {
        h2t = "Have an Emergency?";
        p1t = "Let United expedite your solution. Click below for more information.";
        p2t = "";
        linkB = "/emergency-services"
    } else if(props.name === "cooling") {
        h2t = "Find out how we can help you beat the heat!";
        p2t = "To get an air conditioner installed or repaired click get started.";
    } else if(props.name === "heating") {
        h2t = "We are Experts at Keeping Your House or Building Comfortable!"
        p2t = "Click the link below to get started with our service or ask any questions about furnaces and heating. Allow us help you stay warm this winter!"
    } else if(props.name === "electrical") {
        h2t = "No Need to Worry About Electrical Malfunctions!"
        p2t = "Click the link below to get started and we will send our expert electricians to install or repair any residential or commercial electrical systems. Simply fill out our form to order our services or inquire about a problem you have and we will see how we can help."
    } else if(props.name === "ducting") {
        h2t = "Keep Your HVAC System Running Efficiently!"
        p2t = "Click the link below to contact us to find out how we can save you money by installing ducting in your business or home."
    }


    return (

        <Jumbotron fluid className={"border d-flex flex-column align-items-center mb-0 pt-3 pb-3 h-100 " + props.color + "-primary"}>
            <h1 className="mb-3 pt-3 text-center text-weight-bold text-white pl-3 pr-3">{h2t}</h1>
            <p className="mb-3 text-center font-italic text-white pl-5 pr-5 pt-3 pb-3 p-large">{p1t}</p>
            <p className="mb-3 text-center font-italic text-white pl-5 pr-5 pt-3 pb-3 p-large">{p2t}</p>
            <Button href={linkB} className={"border-0 mb-3 btn-lg shadow " + props.color + "-secondary"}>Get Started</Button>

        </Jumbotron>
    );
}

export default ServiceContact
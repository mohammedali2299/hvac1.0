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
        p1t = "Let United expedite your solution.";
        linkB = "/emergency-services"
    } else if(props.name === "cooling") {
        h2t = "Get Your AC Installed or Repaired Now!";
        p2t = "Have your AC up and running in no time at all. Keep your home or building cool this summer with our quality installation.";
    } else if(props.name === "heating") {
        h2t = "Install or Repair Your Furnace Now!"
        p2t = "Help us keep your house comfortable this winter with our quick and reliable furnace services."
    } else if(props.name === "electrical") {
        h2t = "No Need to Worry About Electrical Problems!"
        p2t = "As seasoned electricians, you can count on us to resolve any of your electrical issues."
    } else if(props.name === "ducting") {
        h2t = "Keep Your HVAC System Running Efficiently!"
        p2t = "Contact us to find out how we can save you money by installing or repairing the ducting in your business or home."
    }


    return (

        <Jumbotron fluid className={"border d-flex flex-column align-items-center mb-0 h-100 pt-3 pb-3 " + props.color + "-primary"}>
            <h1 className="mb-3 pt-3 text-center text-weight-bold text-white pl-2 pr-2">{h2t}</h1>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-3 pb-1 p-large">{p1t}</p>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-0 pb-0 p-large">{p2t}</p>
            <Button href={linkB} className={"border-0 btn-lg shadow " + props.color + "-secondary"}>Get Started</Button>

        </Jumbotron>
    );
}

export default ServiceContact
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Emergency from './components/Emergency.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import './App.css'
import Navbar from './components/CustomNavbar'
import Sitemap from './components/Sitemap'
import Owner from './components/subcomponents/Owner'
import FAQ from './components/subcomponents/FAQ'
import Services from './components/servicesTemplate'
import Gallery from './components/subcomponents/Gallery'
import CareerOpportunities from './components/subcomponents/CareerOpportunities'
import ResCom from './components/ResComTemplate'


function App() {
  
  var serviceData = {
    coolingProps: {
        title: "Air Conditioning",
        name: "cooling"
    },
    heatingProps: {
        title: "Heating",
        name: "heating"
    },
    ductingProps: {
      title: "Ducting",
      name: "ducting"
    },
    electricalProps: {
      title: "Electrical",
      name: "electrical"
    },
    residentialProps: {
      name: "residential"
    },
    commercialProps: {
      name: "commercial"
    }

  }

  return (
    <div>
      <head>
        <title>United HVAC and Electrical Inc.</title>
      </head>
      <Router>
        <Navbar/>
          <Route exact path = "/" component = {Home} />
          <Route path = "/cooling" render = {() => <Services {...serviceData.coolingProps} />} /> 
          <Route path = "/heating" render = {() => <Services {...serviceData.heatingProps} />} />
          <Route path = "/ducting" render = {() => <Services {...serviceData.ductingProps} />} />
          <Route path = "/electrical" render = {() => <Services {...serviceData.electricalProps} />} />
          <Route path = "/emergency-services" component = {Emergency} />
          <Route path = "/about" component = {About} /> 
          <Route path = "/contact" component = {Contact} />
          <Route path = "/owner" component = {Owner} />
          <Route path = "/faq" component = {FAQ} />
          <Route path = "/gallery" component = {Gallery} />
          <Route path = "/career-opportunities" component = {CareerOpportunities} />
          <Route path = "/residential" render = {() => <ResCom {...serviceData.residentialProps} />} />
          <Route path = "/commercial" render = {() => <ResCom {...serviceData.commercialProps} />} />
          <Sitemap sticky="bottom"/>
      </Router>
    </div>
    
  );
}

export default App;

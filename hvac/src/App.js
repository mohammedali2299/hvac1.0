import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.js'
// import Cooling from './components/Cooling.js'
import Emergency from './components/Emergency.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import './App.css'
import Navbar from './components/CustomNavbar'
import Install from './components/subcomponents/Install'
import Repair from './components/subcomponents/Repair'
import Maintain from './components/subcomponents/Maintain'
import Sitemap from './components/Sitemap'
import Owner from './components/subcomponents/Owner'
import FAQ from './components/subcomponents/FAQ'
import Residential from './components/subcomponents/Residential'
import Commercial from './components/subcomponents/Commercial'
import Services from './components/servicesTemplate'
import Gallery from './components/subcomponents/Gallery'


function App(props) {
  
  var serviceData = {
    coolingProps: {
        imgsrc: "/extras/cooling-main.jpeg",
        color: "primary",
        title: "Air Conditioning"
    },
    heatingProps: {
        imgsrc: "/extras/cooling-main.jpeg",
        color: "danger",
        title: "Heating"
    },
    ductingProps: {
      imgsrc: "/extras/cooling-main.jpeg",
      color: "secondary",
      title: "Ducting"
    },
    electricalProps: {
      imgsrc: "/extras/cooling-main.jpeg",
      color: "warning",
      title: "Electrical"
    }
  }

  return (
    <div>
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
          <Route path = "/install" component = {Install} />
          <Route path = "/repair" component = {Repair} />
          <Route path = "/maintain" component = {Maintain} />
          <Route path = "/owner" component = {Owner} />
          <Route path = "/faq" component = {FAQ} />
          <Route path = "/residential" component = {Residential} />
          <Route path = "/commercial" component = {Commercial} />
          <Route path = "/gallery" component = {Gallery} />
          <Sitemap sticky="bottom"/>
      </Router>
    </div>
    
  );
}

export default App;

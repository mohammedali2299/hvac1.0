import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Cooling from './components/Cooling.js'
import Heating from './components/Heating.js'
import Ducting from './components/Ducting.js'
import Electrical from './components/Electrical.js'
import Emergency from './components/Emergency.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import './App.css'
import Navbar from './components/CustomNavbar.js'
import Install from './components/subcomponents/Install.js'
import Repair from './components/subcomponents/Repair.js'
import Maintain from './components/subcomponents/Maintain.js'
import Sitemap from './components/Sitemap.js'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Route exact path = "/" component = {Home} />
          <Route path = "/cooling" component = {Cooling} /> 
          <Route path = "/heating" component = {Heating} />
          <Route path = "/ducting" component = {Ducting} />
          <Route path = "/electrical" component = {Electrical} />
          <Route path = "/emergency-services" component = {Emergency} />
          <Route path = "/about" component = {About} /> 
          <Route path = "/contact" component = {Contact} />
          <Route path = "/install" component = {Install} />
          <Route path = "/repair" component = {Repair} />
          <Route path = "/maintain" component = {Maintain} />
        <Sitemap sticky="bottom"/>
      </Router>
    </div>
    
  );
}

export default App;

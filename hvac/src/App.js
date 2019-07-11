import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Cooling from './components/Cooling'
import Heating from './components/Heating'
import Ducting from './components/Ducting'
import Electrical from './components/Electrical'
import Emergency from './components/Emergency'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import Navbar from './components/CustomNavbar'
import Install from './components/subcomponents/Install'
import Repair from './components/subcomponents/Repair'
import Maintain from './components/subcomponents/Maintain'
import Sitemap from './components/Sitemap'

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

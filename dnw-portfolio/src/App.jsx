import { useState } from 'react'
import CustomNavbar from './CustomNavbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './contact';
import Cta from './cta';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>

    <CustomNavbar />
    <Cta/>
     <About />
      
      <Resume />
      <Projects />
      <Contact />
      
  </div>
  );
}

export default App;

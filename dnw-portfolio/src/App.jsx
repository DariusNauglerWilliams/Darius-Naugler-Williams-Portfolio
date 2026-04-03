import { useState } from 'react'
import CustomNavbar from './CustomNavbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>

    <CustomNavbar />
     <About />
      <Projects />
      <Resume />
      
  </div>
  );
}

export default App;

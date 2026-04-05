import React from 'react';

function Cta() {
  return (
    <section id="cta" style={{position: "relative"}}> 
      <img id="img" src="/dariuscta.png" alt="cta" style={{ width: "100%" }} />




       <div style={{ position: "absolute", top: "37%", left: "10%" }}>
        <h1 style={{ fontSize: "90px", margin: 0 }}>Let’s Work</h1>
        <a href="#resume">
          <button style={{ fontSize: "24px" }}>Hire Me</button>
        </a>
      </div>
    </section>
  );
}

export default Cta;
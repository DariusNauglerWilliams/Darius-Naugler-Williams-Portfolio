import React from 'react';

function Cta() {
  return (
    <section id="cta" style={{position: "relative"}}> 
      <img id="img" src="/dariuscta.png" alt="cta" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />




       <div style={{ position: "absolute", top: "37%", left: "1.2%" }}>
        <h1 style={{ fontSize: "80px", margin: 0, color: "#000000" }}>Let’s Work</h1>
        <a href="#resume">
          <button style={{ fontSize: "24px" , color: "#000000"}}>Hire Me</button>
        </a>
      </div>
    </section>
  );
}

export default Cta;
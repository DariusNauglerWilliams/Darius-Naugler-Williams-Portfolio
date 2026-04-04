import React from 'react';

function Resume() {
return(
    <section id="resume" style={{ height: "100vh" }}>

    <div className="resume-shell">

    <div className="resume-header">
            <h2 className="resume-kicker">My Resume</h2>
            
          </div>

<a className="resume-viewer" href="/resume.pdf" target="_blank" rel="noopener noreferrer">

  <img className="resume-display" src="/resume.png" alt="resume"/>
    View Resume</a>

<a className="resume-download" href="/resume.pdf" download>Download My Resume</a>

</div>

    </section>
)
}



export default Resume;
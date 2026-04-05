import React from 'react';

function Resume() {
return(
    <section id="resume" style={{ height: "100vh" }}>

    <div className="resume-shell">

    <div className="resume-header">
            <h2 className="resume-kicker">My Resume</h2>
            <br></br>
            <p>Click Image to view full resume</p>
          </div>

<a className="resume-viewer" href="/Darius-resume-2026.pdf" target="_blank" rel="noopener noreferrer">

  <img className="resume-display" src="/resume.png" alt="resume"/>
    </a>
<a className="resume-viewer-button" href="/Darius-resume-2026.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>

<a className="resume-download" href="/Darius-resume-2026.pdf" download>Download My Resume</a>

</div>

    </section>
)
}



export default Resume;
import React from 'react';

function About() {

    return(
    <section id="about" style={{ height: "100vh" }}>


<div className="about-me-container">
        <img
          src="public/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div className="about-me-text">
          <h1>About Me</h1>
          <p>
            Hi! I'm Darius, a passionate student with a love for creating
            innovative solutions. I have experience in full-stack development and enjoy
            working on projects that make a difference.
          </p>
          <p>
            When I'm not coding, I enjoy Excersizing, Music, and exploring
            On the internet for countless things like new frameworks and languages and personal projects to do.
          </p>
        </div>
      </div>


        
    </section>
    )
}



export default About;
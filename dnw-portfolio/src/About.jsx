import React from 'react';

function About() {

    return(
    <section id="about">


<div className="about-me-container">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div className="about-me-info">
          <h1>About Me</h1>
          <p>
            Hi! I'm Darius, a passionate student with a love for creating
            innovative solutions. I have experience in full-stack development and enjoy
            working on projects that make a difference.
          </p>
          
        </div>
        <div className="about-me-skills">
          <h1>My Current Skills</h1>
          <p>
            React, JavaScript, HTML, CSS, full-stack web development, Node.js, Express.js, SQL/MySQL, C#, Git/GitHub, API development, responsive design, problem-solving, teamwork, communication, adaptability, and continuous learning.
          </p>
          </div>
          <div className="about-me-looking-for">
          <h1>What I'm Currently Looking For</h1>
          <p>
            I am currently looking for internship or job opportunities in the IT field where I can grow and gain experience.
          </p>
</div>




      </div>


        
    </section>
    )
}



export default About;
import React from 'react';

function Projects() {
return(
    <section id="projects">


 <div className="project-shell">
<div className="project-header">
            <p className="project-kicker">My Work</p>
            <h2>Projects I've Worked On</h2>
            <p>
              Here are some of the projects I've worked on. Click on any view project to learn more about it.
            </p>
          </div>



  <div className="project-cards">

 <div className="project">
    <h2>Ai Review Checker Form</h2>
    <img src="/aichecker-img.png" alt="project" />
    <p>A C# Windows Forms application that uses machine learning to analyze user reviews and determine whether they are positive or negative. The system uses ML.NET to process text input, predict good or bad reviews, and provide a confidence score for each prediction. It also allows users to correct incorrect predictions, helping improve the model over time through retraining.</p>
    <p><strong>Purpose:</strong> Was an assignent for a C# class, along with curiosty of doing ML and Ai.</p>
    <p><strong>Tools:</strong> C#, .NET, WinForms, ML.NET</p>
    <p><strong>My Role:</strong> Designed and developed the full application, including the user interface and machine learning model for analyzing reviews.</p>
    <p><strong>Outcome:</strong> Designed and developed the full application, including the user interface and machine learning model for analyzing reviews.</p>
    <a target="_blank" href ="https://github.com/DariusNauglerWilliams/AI-Powered-Review-Analysis-App-C-ML.NET-">View Project</a>
  </div>

  <div className="project">
    <h2>Portfolio Project</h2>
    <img src="/portfolio-img.png" alt="project" />
    <p>This project was developed as part of a course assignment while also serving as a personal portfolio project. It showcases my resume, technical skills, and a collection of projects I have worked on. The goal of this website is to present my experience and abilities in a clear, professional format for potential employers, while also allowing me to continue expanding and improving it over time as I grow as a developer.</p>
    <p><strong>Purpose:</strong> This project was created to complete a final course assignment while also building my first professional portfolio. It provides a central place to showcase my resume, technical skills, and projects, allowing me to present myself more effectively to potential employers and track my growth as a developer.</p>
    <p><strong>Tools:</strong> React, JS, CSS, HTML, Bootstrap</p>
    <p><strong>My Role:</strong> Created the entire portfolio project</p>
    <p><strong>Outcome:</strong> A good looking and proffesional portfolio website</p>
    <a target="_blank" href="https://github.com/DariusNauglerWilliams/Darius-Portfolio">View Project</a>
  </div>


  <div className="project">
    <h2>Campus Study Spot Finder</h2>
    <img src="/cssf.png" alt="project" />
    <p>A web application designed to help students find available and suitable study spots on campus based on their preferences.</p>
    <p><strong>Purpose:</strong> To make it easier for students to locate quiet, convenient, and appropriate places to study without wasting time searching around campus.</p>
    <p><strong>Tools:</strong> Next.js, React, TypeScript, Tailwind CSS, pnpm, Node.js</p>
    <p><strong>My Role:</strong> Contributed to the development of the application by implementing features such as dark/light mode, study spot listing interface, and user authentication, as well as fixing bugs and improving overall functionality.</p>
    <p><strong>Outcome:</strong> Currently developing a functional application that will allow users to efficiently find study spots based on their needs.</p>
    <a target="_blank" href="https://github.com/DariusNauglerWilliams/Campus-study-spot-v1">View Project</a>
  </div>


    </div>


    </div>


    </section>
)
}



export default Projects;
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      
      <div className="contact-shell">
        
        <div className="contact-header">
          <p className="contact-kicker">Get In Touch</p>
          
          <h2>Let's do something great together.</h2>
          
          <p>
            Have a project in mind, internship or job opportunity, or collaboration idea? 
            Send me a message and I'll get back to you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left side */}
          <div className="contact-card-group">
            
           <a className="contact-card" href="mailto:djnaugler@gmail.com">
  <img src="/email.png" alt="email" className="contact-icon" />
  <div>
    <h3>Email</h3>
    <p>djnaugler@gmail.com</p>
  </div>
</a>

<a className="contact-card" href="tel:+17822348930">
  <img src="/phone.png" alt="phone" className="contact-icon" />
  <div>
    <h3>Phone</h3>
    <p>782-234-8930</p>
  </div>
</a>

          </div>

          {/* Right side (form) */}
          <form
            className="contact-form"
            action="https://formsubmit.co/djnaugler@gmail.com"
            method="POST"
          >

            {/* Redirects to main page */}
            <input type="hidden" name="_next" value="/#contact" />
            

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your opportunity"
              required
            />

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </section>
  );
}



export default Contact;
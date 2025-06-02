import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="/images/profile.jpg"
            alt="Cesar Preza"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h1 className="about-title">Get to know me</h1>
          <p className="about-text">
            Im Cesar, A Full-Stack Software Engineer based in Los Angeles, CA.
            I have a passion for building applications that can make people's lives easier. Whether it's helping users stay organized or simplifying a workflow. My journey into tech started with a long-standing love for technology and computers. After 10 years working as an X-ray technician and medical assistant, I made the leap into software development.
          </p>
          <p className="about-text">
            I specialize in JavaScript, React, and SQL-based databases, and enjoy building clean, functional applications that solve real problems. Although, I don't shy away from learning new technologies and embrace the challenge with exitement and commitment to understand what the task asks of me. I'm confident working independently, but I also thrive in team environments. A skill honed over years of collaborating with clinical teams in high-pressure settings.
          </p>
          <p className="about-text">
            Now, I'm focused on growing as a Full-Stack Developer and contributing to meaningful, user-focused applications in a full-stack role.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

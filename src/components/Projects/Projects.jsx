import React from 'react'
import projects from '../../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-image-overlay"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

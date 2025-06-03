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
            <h2 className="project-title">{project.title}</h2>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-image-container"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-image-overlay">
                Visit Site
              </div>
            </a>
            <div className="project-links">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                Github Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

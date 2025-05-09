import { useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <>
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <div ref={aboutRef} className='section'>
        <About />
      </div>
      <div ref={projectsRef} className='section'>
        <Projects />
      </div>
      <div ref={contactRef} className='section'>
        <Contact />
      </div>
      <button onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
        className='scroll-to-top'
      >↑ Top</button>
    </>
  )
}

export default App

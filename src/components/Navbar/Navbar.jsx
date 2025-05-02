import React from 'react'

function Navbar({ scrollToProjects, scrollToContact }) {

  return (
    <nav>
        <button onClick={scrollToProjects}>Projects</button>
        <button onClick={scrollToContact}>Contact</button>
    </nav>
  )
}

export default Navbar

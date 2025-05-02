import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Projects />
      <Contact />
    </>
  )
}

export default App

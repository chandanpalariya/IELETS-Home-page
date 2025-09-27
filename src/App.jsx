import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from "./components/Highligh"
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Destinations from './components/Destinations'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Features/>
    <Destinations/>
    <Testimonials/>
    <Footer/>
    </>
    
  )
}

export default App

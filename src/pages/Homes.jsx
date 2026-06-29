import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import  About  from '../components/About'
import { Contact } from '../components/Contact'
import { Process } from '../components/Process'
import  ScooterShowcase  from '../components/ScooterShowcase'
import { Trust } from '../components/Trust'
function Homes() {
  return (
  <>
  <Navbar />
  <Hero />
  
  
  
  <Products />
  <ScooterShowcase />
  <About /> 
  <Process />
  <Trust />
  <Contact />
  <Footer />

  </>
  )
}

export default Homes

import React from 'react'
import Nav from "../components/Navbar"
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'
import About from '@/components/About'


const Home = () => {
  return (
   
      <div >
       <Nav />
       <Hero  />
       <About />
       <Projects /> 
       <Contacts />
       <Footer />
      </div>
    
  )
}

export default Home

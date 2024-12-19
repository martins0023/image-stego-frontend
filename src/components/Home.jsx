import React from 'react'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Hero'
import About from './About'

const Home = () => {
  return (
    
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/*<Navbar />*/}
          <Hero />
        </div>
        <About />
        {/*<Experience />
        <Tech />
        <Works />
        <Feedbacks />*/}
        <div className='relative z-0'>
          {/*<Contact />
          <StarsCanvas />
          <Footer/>*/}
        </div>
      </div>
    
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CatsHome from '../components/CatsHome'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Hero />
      <Section />
      <CatsHome />
      <Footer />
    </div>
  )
}

export default Home

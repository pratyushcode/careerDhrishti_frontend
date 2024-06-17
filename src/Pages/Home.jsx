import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../heroComponent/Hero'
import Service from '../heroComponent/Services'
import Features from '../heroComponent/Features'
import Card from '../heroComponent/Card'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Service/>
      <Features/>
    <Card/>
    <Footer/>
    </div>
    
  )
}

export default Home
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Herovalue from '../heroComponent/Herovalue'
import Aboutstats from '../Components/AboutComponent/Aboutstats'
import OurStory from '../Components/AboutComponent/OurStory'
import Team from '../Components/AboutComponent/Team'


const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white py-2 sm:py-16">
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">ABOUT US</h2>
          <p className="mt-2 text-[50px] font-bold tracking-tight text-primary sm:text-[50px]">
          Unlock the Career path for yourself with Career Drishti
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Dive deep into the world of Career choices with our collection of insightful resources and courses. Explore the latest trends, breakthroughs, and discussions on career and choose the best way out for you with our various career quizzes. Whether you're a student or a professional, our Career quizzes offer a gateway to your personalized choice of career field.
          </p>
        </div>
        </div>
        </div>
        <Aboutstats/>
        <OurStory/>
        <Team/>

        <Footer/>
        
        </>
    
  )
}

export default About
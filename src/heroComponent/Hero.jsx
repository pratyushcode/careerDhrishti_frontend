import React, { useState } from "react";
import Footer from "../Components/Footer";
import Herovalue from "./Herovalue";
import Hello from "./hello";
import Service from "./Services";
import Features from "./Features";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <>
    
     
      <div className="relative bg-white pb-[70px] pt-[50px] dark:bg-dark  px-7 lg:px-[80px]">
        <div className="container ">
          <div className="lg:mx-4 flex flex-wrap">
            <div className="w-full px-2 text-center lg:w-5/12 sm:px-8 sm:text-start">
              <motion.div 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="hero-content">
                <div className="mb-5 text-3xl font-semibold !leading-[1.208] text-black sm:text-4xl lg:text-[40px] xl:text-2xl">
                Your Journey to Tomorrow Begins Here
                </div>
                <div className="mb-5 text-2xl font-bold !leading-[1.208] text-primary sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Explore Resources, Blogs and Experts for a better Career.
                </div>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                Welcome to the epicentre of Career exploration. Career Compass is your passport to a explore the world of careers where you can learn, and reshape your future. Join us on this visionary expedition of Careers.
                </p>
                <ul className="flex flex-wrap justify-center md:justify-normal sm:items-center gap-4 sm:gap-2">
                  <li>
                    <Link to="https://wjcw78ls-8501.inc1.devtunnels.ms/">
                    <a
                      // href="https://wjcw78ls-8501.inc1.devtunnels.ms"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Talk to a Chatbot
                    </a>
                    </Link>
                    
                  </li>
                  <li>
                    <Link to="/expert"><a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] rounded-md bg-primary dark:text-white"
                    >
                      
                      Talk to Expert
                    </a></Link>
                    
                  </li>
                </ul>
                <div className="clients ">
                <Herovalue/>
                  
                </div>
               
              </motion.div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <motion.div 
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right flex-wrap">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* service -----------------------------------------------------------------------------------------------------*/}
      
    </>
  );
};

export default Hero;


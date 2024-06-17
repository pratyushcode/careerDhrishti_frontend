import React from "react";
import step1 from "../assets/step11.png"
import step2 from "../assets/step22.png"
import step3 from "../assets/step33.png"

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="bg-white pb-10 pt-5 dark:bg-dark lg:pb-20 lg:pt-[80px] sm:px-[80px]  w-screen ">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[0px] max-w-[510px] text-center lg:mb-20 w-full">
              <span className="mb-5 block text-lg font-semibold text-primary">
                HOW WE DO IT?
              </span>
              <h2 className="mb-4 text-2xl font-bold text-black sm:text-4xl md:text-[40px]">
                Data Driven Scientific Approach
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            date="Step 1"
            CardTitle="Career Tests & Reports"
            CardDescription="you can complete your online career tests at the comfort of your home and at the convenience of your time. You can also Immediately download your Career Reports and understand the same through the explainer"
            image={step1}
            too="/Quiz"
            button="Take Test"
          />
          <BlogCard
            date="Step 2"
            CardTitle="Reports Analysis & Discussion"
            CardDescription="Our career counsellor will analyse your data, understand your profile and get ready for the live interaction. The career counsellor will explain your report, clear doubts and answer questions relating to your career."
            image={step2}
            too="/expert"
            button="Ask a Expert"
          />
          <BlogCard
            date="Step 3"
            CardTitle="Career Options & Recommendations"
            CardDescription="Discuss and  finalize the blueprint of your career path  which explains - the right decisions and strategy to transition into the right domain, role and industy that align with your strengths and interests."
            image={step3}
            too="https://wjcw78ls-8501.inc1.devtunnels.ms"
            button="AI ChatBot"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

const BlogCard = ({ image, date, CardTitle, CardDescription, button, too }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('blog-card');
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInViewport && !isVisible) {
        setIsVisible(true);
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
      } else if (!isInViewport && isVisible) {
        setIsVisible(false);
        controls.start({ y: 100, opacity: 0, transition: { duration: 0.5 } });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, controls]);

  return (
    <div
      id="blog-card"
      className="w-full px-4 sm:w-auto"
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      animate={controls}
    >
      <div className="mb-10 w-full flex justify-center items-center flex-col">
        <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xl font-semibold leading-loose text-white">
          {date}
        </span>
        <div className="mb-8 overflow-hidden rounded p-5">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          <h3>
            <Link to={too} className="mb-4 flex text-xl font-semibold text-dark text-primary items-center justify-center text-center sm:text-2xl lg:text-xl xl:text-2xl">
              {CardTitle}
            </Link>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6 text-center text-wrap font-sans">
            {CardDescription}
          </p>
        </div>
        <Link to={too}>
          <div className="mb-5 mt-5 p-4 inline-block rounded border-2 border-primary cursor-pointer px-4 py-1 text-center text-xl font-semibold leading-loose text-primary items-end hover:bg-primary hover:text-white transition-transform duration-500 ease">
            {button}
          </div>
        </Link>
      </div>
    </div>
  );
};

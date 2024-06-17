import React from "react";
import { motion, useAnimation } from 'framer-motion';

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-4 dark:bg-dark lg:pb-20 lg:pt-[10px] sm:px-[80px] px-2">
        <div className="container">
        <div className="-mx-4 flex flex-wrap mb-10">
          <div className="w-full px-4">
            <div className="mx-auto mb-1 max-w-[510px] text-center ">
              <span className=" block text-lg font-semibold text-black mb-4 pt-4 uppercase">
              Unlock the Power of
              </span>
              <h2 className=" text-3xl font-semibold  leading-[1.2] text-primary sm:text-4xl md:text-[40px]">
              Features of CareerDrishti.ai
              </h2>
              
            </div>
          </div>
        </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              
              CardTitle="Career Related Resources"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Stay informed with our resource section dedicated to future technology."
              Button="View Details"
            />
            <SingleCard
              
              CardTitle="Career Related Courses"
              CardDescription="Dive deep into courses to understand what the career brings to you as you grow and be clear with the help of our Industry Experts for choosing your career path. "
              Button="View Details"
            />
            <SingleCard
             
             CardTitle="Career Compass Quizzes"
             CardDescription="Attempt our Career Analysis quizzes for a better understanding of who you are and how you can become the person who you wish to by understanding your strengths and weaknesses."
             Button="View Details"
           />
            
            

          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mt-7"><SingleCard
             
             CardTitle="Career Drishti AI"
             CardDescription="Navigate your career path with personalized guidance and insights, right at your fingertips."
             Button="View Details"
           />
           <SingleCard
            
             CardTitle="Talk to an Expert"
             CardDescription="Unlock insights and guidance from seasoned experts, right when you need it."
             Button="View Details"
           /></div>
          
          
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' });
  };

  const handleHoverExit = () => {
    controls.start({ scale: 1, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' });
  };

  return (
    <>
      <motion.div
        className="overflow-hidden rounded-lg bg-gray-200 shadow-1 duration-300 transition-transform transform-gpu"
        whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
        animate={controls}
      >
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <div className="h-[2px] bg-blue-950 mb-4"></div>
          <p className="mb-7 text-xl leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition bg-primary text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
};
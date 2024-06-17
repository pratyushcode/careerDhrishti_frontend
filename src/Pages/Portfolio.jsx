

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Google from "../assets/google.png"
import MBA from "../assets/MBA.png"
import IMBA from "../assets/thumbnail.png"
import Finance from "../assets/finance.jpg"
import Medical from "../assets/medical.jpg"
import Engineers from "../assets/engineers.jpeg"

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");
  const [resources, setResources] = useState([]);
  

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get("https://careerdhrishti-backend.onrender.com/api/resource/");
      setResources(response.data.resource);
      console.log(response);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
    <Navbar/>
      <section className="pt-2 pb-12 lg:pt-[20px] lg:pb-[90px] dark:bg-dark sm:px-[100px] px-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                Dive into the Details
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Career Drishti’s Resources
                </h2>
                
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center sm:-mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Resources
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("finance")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "Finance"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Finance
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("engineering")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "engineering"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Engineering
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("medical")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "medical"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Medical
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {resources.map((resource) => (
              <PortfolioCard
                key={resource._id}
                ImageHref={resource.ImageHref}
                category={resource.category}
                title={resource.title}
                desc={resource.desc}
                button="View Details"
                buttonHref={resource.buttonHref}
                showCard={showCard}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  desc,
  button,
  buttonHref,
  
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-gray-100 dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-black mb-5 text-xl font-bold">{title}</h3>
            <p className="text-primary text-center text-base pb-2">{desc}</p>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

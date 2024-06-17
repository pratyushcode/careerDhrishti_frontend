import React from "react";
import SingleCard from "./SingleCard";
import Striver from "../assets/Striver.jpeg"
import HiteshSir from "../assets/HiteshSir.jpeg"
import Neeraj from "../assets/Neeraj.jpeg"
import PW from "../assets/Physicswallah.jpg"
import ashish from "../assets/ashish.jpeg"
import Tanmay from "../assets/Tanmay.jpeg"


const Cards = ({open}) => {
  return (
    <>
      <section className="bg-white sm:mx-[120px] mx-2 mt-1 mb-0 dark:bg-dark lg:pb-20 lg:pt-[10px] flex justify-center items-center flex-col">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image={Striver}
              CardTitle="Mr. Raj Vikramaditya"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Mr. Raj Vikramaditya is an expert in the field of DevOps and System Design"
              Button="Consult Now"
              open={open}
            />
            <SingleCard
              image={Neeraj}
              CardTitle="Mr. Neeraj Walia"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Mr.Neeraj Walia is a freelancer with 10+ years of experience in field of freelancing & IT Agency."
              Button="Consult Now"
              open={open}
            />
            <SingleCard
              image={HiteshSir}
              CardTitle="Mr. Hitesh Choudhary"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Mr. Hitesh Choudhary is a Full Stack Developer with more than 15+ years of experience in this field."
              Button="Consult Now"
              open={open}
            />
            <SingleCard
              image={PW}
              CardTitle="Mr. Alakh Pandey"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Alakh Pandey is the Founder and CEO of PW, India's leading, most affordable Ed-tech platform, which provides an accessible, comprehensive, and state-of-the-art learning experience. "
              Button="Consult Now"
              open={open}
            />
            <SingleCard
              image={Tanmay}
              CardTitle="Mr. Tanmay Bhatt"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Mr. Tanmay Bhatt is a comedian and AI enthusiast as well, a perfect combination of industry expertise."
              Button="Consult Now"
              open={open}
            />
            <SingleCard
              image={ashish}
              CardTitle="Mr. Ashish Chanchalani"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Mr. Ashish Chanchalani is an expert in the industry of Documentary creation and YouTube."
              Button="Consult Now"
              open={open}
            />
           
            
          </div>
        </div>
        <div className="bg-primary text-white text-xl h-12 w-auto p-2 rounded-lg border hover:bg-white hover:text-primary hover:border-primary  text-center">Load More</div>
        
      </section>
    </>
  );
};

export default Cards;
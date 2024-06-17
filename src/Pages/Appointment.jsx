import React, { useState } from 'react'
import NavBar from "../Components/Navbar"
import Cards from '../Components/Cards'
import Contact from '../Components/ContactUs'
import { Link } from 'react-router-dom'

import { TiTickOutline } from "react-icons/ti";
import Footer from '../Components/Footer';


const Appointment = () => {
    const [open, setOpen] = useState(false)

    const handleAccept = () => {
        // Handle acceptance logic
        setOpen(false);
    };
    
    const handleGoBack = () => {
        // Handle "Go Back" logic
        setOpen(false);
    };
    
    const handleGoHome = () => {
        // Handle "Go Home" logic
        setOpen(false);
    };

    console.log(open);
    
    return (
        <>
            <div className='h-screen w-screen bg-white overflow-x-hidden'>
                <NavBar/>
                <div className="bg-white py-2 sm:py-16 ">
                    <div className="mx-auto max-w-10xl sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-5xl lg:text-center">
                            <h2 className="text-base font-semibold leading-7 text-black">Instant Consultation</h2>
                            <p className="mt-2 text-[50px] font-bold tracking-tight text-primary sm:text-[50px]">
                                Our Team of Industry Experts
                            </p>
                            <div className='h-[1px] bg-primary mt-3'></div>
                        </div>
                    </div>
                </div>
                <Cards open={open}/>
                <div className="bg-white py-2 sm:py-16">
                    <div className="mx-auto max-w-10xl px-6 lg:px-8">
                        <div className="mx-auto max-w-5xl lg:text-center">
                            <p className="mt-2 text-[50px] font-bold tracking-tight text-primary sm:text-[50px]">
                                Contact Us
                            </p>
                            <div className='h-[1px] bg-primary mt-3'></div>
                        </div>
                    </div>
                </div>
                <Contact/>
                <Footer/>

                {open && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                            <div className="py-4 text-left px-6 justify-center items-center flex flex-col">
                                <TiTickOutline size={45} className='text-green-700 rounded-full bg-white' />
                                <p className="text-2xl font-bold mb-6 text-primary mt-4">Appointment Requested</p>
                                <p className="text-xl font-bold mb-6 text-black">Our Coordinator will respond back soon</p>
                                
                                <div className="flex justify-around gap-10">
                                    <button onClick={handleGoBack} className="btn bg-gray-500 text-white p-2">
                                        Go Back
                                    </button>
                                    <Link to="/">
                                        <button onClick={handleGoHome} className="btn bg-blue-500 text-white p-2">
                                            Go Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Appointment;

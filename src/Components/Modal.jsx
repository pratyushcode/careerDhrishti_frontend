import React, { useEffect, useRef, useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker";

import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./calendar";
const Modal = ({modalOpen, setModalOpen,title,open}) => {


  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

 



const [startDate, setStartDate] = useState(new Date());


  return (
    <>
      <div className="container mx-auto ">
        {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <div
          className={`fixed left-0 top-0 flex  w-full items-center justify-center  bg-primary  px-4  z-30 ${
            modalOpen ? "flex" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-primary  text-center dark:bg-dark-2 opacity-100"
          >
            <h3 className="pb-1 text-md font-semibold text-dark dark:text-black">
              Book Your Appointment with 
            </h3>
            <p className="text-2xl text-white mb-2">{title}</p>
            {/* <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span> */}
            {/* <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p> */}
            
            <Calendar open={open}></Calendar>
            
            <div className=" flex flex-wrap  justify-center mt-2 mx-1">
              <div className="w-1/2">
                <button
                  onClick={() => setModalOpen(false)}
                  className=" h-10  block w-full rounded-md border border-stroke p-1 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                >
                  Cancel
                </button>
              </div>
              {/* <div className="w-1/2 px-3">
                <button className=" h-10  w-full text-base rounded-md border border-primary bg-green-500  p-1 text-center  font-medium text-white transition hover:bg-blue-dark">
                  <a href={`/#`}> Book   </a>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

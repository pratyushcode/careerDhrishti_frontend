import React,{useState} from 'react'
import { TiTick } from "react-icons/ti";
import Modal from './Modal';
import StarRating from './StarRating';

const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
    open
  }) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    

    return (
      <>
        {/*  */}
        <div className="mb-8 overflow-hidden rounded-lg bg-white  duration-300 shadow-lg shadow-gray-600 border   transition-transform transform-gpu hover:scale-110 ">
          <img src={image} alt="" className="w-full h-[300px] items-center" />
          <div className="p-2 text-center sm:p-9 md:p-7 xl:p-2">
            <h3>
              <a
                // href={titleHref ? titleHref : "/#"}
                className="mb-2 block text-xl font-semibold text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-5 text-base leading-relaxed text-black">
              {CardDescription}
            </p>
  
            {Button && (
              <button

                className=" rounded-full bg-gray-200 inline-block   border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition  hover:border-white hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                onClick={()=>{setModalOpen(true)}}
              >
                {Button}
                <TiTick size={25} className=' text-green-700  inline-block ml-2'/>
              </button>
            )}
          </div>
          <div>
            
    </div>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} title={CardTitle} open={open} />
        </div>
        
        {/*  */}
        
      </>
    );
  };

  export default SingleCard
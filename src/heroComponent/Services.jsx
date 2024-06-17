import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PiStudentBold } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";

const Service = () => {
  return (
    <section className="pb-5 bg-primary">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap mb-5">
          <div className="w-full px-4">
            <div className="mx-auto mb-1 max-w-[510px] text-center">
              <span className="block text-lg font-semibold text-white mb-4 pt-4">
                DESIGNED FOR
              </span>
              <h2 className="text-3xl font-semibold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                Everyone with a Big Dream
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="Latest Career Updates"
            details="Over 100 articles published monthly"
            icon={<PiStudentBold size={35} className="text-primary" />}
          />
          <ServiceCard
            title="Expert Contributors"
            details="50+ renowned Career experts on our team"
            icon={<GrUserExpert size={35} className="text-primary" />}
          />
          <ServiceCard
            title="Global Readership"
            details="5K+ monthly readers"
            icon={<IoBookOutline size={35} className="text-primary" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('service-card');
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInViewport && !isVisible) {
        setIsVisible(true);
        controls.start({ scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } });
      } else if (!isInViewport && isVisible) {
        setIsVisible(false);
        controls.start({ scale: 0.8, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, controls]);

  return (
    <motion.div
      id="service-card"
      className="w-full px-4 sm:w-auto transition-transform transform-gpu hover:scale-110"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
    >
      <div className="mb-2 rounded-[20px] bg-gray-300 pt-7 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-2 xl:px-5 flex justify-center items-center flex-col">
        <div className="mb-2 flex h-[70px] items-center justify-center rounded-2xl">{icon}</div>
        <h4 className="mb-[14px] text-2xl font-semibold text-black text-center">{title}</h4>
        <p className="text-primary dark:text-dark-6 text-center pb-6">{details}</p>
      </div>
    </motion.div>
  );
};

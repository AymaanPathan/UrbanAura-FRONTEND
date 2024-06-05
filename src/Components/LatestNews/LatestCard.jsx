/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function LatestCard(props) {
    const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const handleScroll = () => {
      if (
        sectionElement.getBoundingClientRect().top <
        window.innerHeight * 0.75
      ) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div ref={sectionRef} className='md:flex justify-between md:m-0 ml-4'>
      <motion.div 
        className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.img
          className='w-full h-auto brightness-75 hover:brightness-100 cursor-pointer transition-all duration-500'
          src={props.img}
          alt=""
          initial={{ opacity: 0 }}
          animate={controls}
        />
        <div className="px-6 py-4">
          <motion.div
            className="font-bold text-xl mb-2 text-gray-800"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {props.head}
          </motion.div>
          <motion.p
            className='text-gray-600 font-light text-base leading-7'
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {props.details}
          </motion.p>
        </div>
        <div className="px-6 py-4">
          <motion.span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            #Fashion
          </motion.span>
        </div>
      </motion.div>
    </div>
  );

}

export default LatestCard
import './hero.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Hero() {
  const [animationState, setAnimationState] = useState(false);

  // Start animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimationState(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative items-center grid grid-cols-1 h-screen bg-gray-800">

      <motion.div
        className="hero-image w-full h-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text font-playfair-display absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1
            style={{ fontStyle: 'Georgia', color: '#fff', fontSize: '50px' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: animationState ? 0 : -50, opacity: animationState ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          Devine Vogue
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: animationState ? 0 : 50, opacity: animationState ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            spring styles have arrived
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            style={{ marginTop: '20px' }}
            className="bg-black text-white px-6 py-2"
          >
            <Link to='/men'>
            SHOP NOW
            </Link>
          </motion.button>
        </div>
        <div className="hero-exclusions absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        </div>

        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#">
              &times;
            </a>
            <div className="content">
              <h2>Promotional Information & Exclusions</h2>
              <p>This is a list of exclusions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

import { useContext, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Fav() {
  const { Allproduct } = useContext(ShopContext);

  // Extract the products with specific IDs
  const product71 = Allproduct.find(product => product.id === 71);
  const product72 = Allproduct.find(product => product.id === 72);
  const product73 = Allproduct.find(product => product.id === 73);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const topVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div ref={ref} className="mt-24">
     <div className='flex items-center justify-center md:mb-14'  >
        <span className="border-b-2 border-yellow-400   md:font-extralight  md:font-sans md:text-center font-playfair-display  md:ml-2  md:text-4xl text-4xl text-green-950 text-center ">Recommended For You</span>
        </div>
      <div style={{ backgroundColor: '#fff8f4' }} className="h-full">
        <div className="container mx-auto lg:px-20">
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
            {product71 && (
              <motion.div
                initial="hidden"
                animate={controls}
                variants={leftVariant}
                className="border-r border-gray-300 mx-3 lg:pl-20"
              >
                <div className="py-8 pb-3 mt-72 relative group cursor-pointer transition ease-out duration-300">
                  <Link to={`/product/${product71.id}`}>
                    <img src={product71.image} alt={product71.name} />
                  </Link>
                  <div className="px-7">
                    <h1 className="text-3xl font-bold group-hover:text-green-700 transition ease-out duration-300">01.</h1>
                    <h2 className="text-1xl mt-4 font-bold">{product71.name}</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70">{product71.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
            {product72 && (
              <motion.div
                initial="hidden"
                animate={controls}
                variants={topVariant}
                className="border-r border-gray-300 mx-3 lg:pl-20"
              >
                <div className="py-10 pb-3 mt-32 h-4/6 relative group cursor-pointer transition ease-out duration-300">
                  <Link to={`/product/${product72.id}`}>
                    <img src={product72.image} alt={product72.name} />
                  </Link>
                  <div className="px-7 mt-12">
                    <h1 className="text-3xl font-bold group-hover:text-green-700 transition ease-out duration-300">02.</h1>
                    <h2 className="text-1xl mt-4 font-bold">{product72.name}</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70">{product72.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
            {product73 && (
              <motion.div
                initial="hidden"
                animate={controls}
                variants={rightVariant}
                className="border-r border-gray-300 lg:pl-20"
              >
                <div className="pb-3  relative group cursor-pointer transition ease-out duration-300">
                  <Link to={`/product/${product73.id}`}>
                    <img className='' src={product73.image} alt={product73.name} />
                  </Link>
                  <div className="px-7 mt-12">
                    <h1 className="text-3xl font-bold group-hover:text-green-700 transition ease-out duration-300">03.</h1>
                    <h2 className="text-1xl mt-4 font-bold">{product73.name}</h2>
                    <p className="mt-2 opacity-60 group-hover:opacity-70">{product73.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

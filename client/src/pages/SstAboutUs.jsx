import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaInfoCircle,FaGlobe, FaBullseye, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import aboutUS from '../images/aboutUS.jpg';
import NavbarMain from '../components/NavbarMain';
import FooterMain from '../components/FooterMain';

function SstAboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <NavbarMain />
      <motion.div 
        className="relative w-full h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={aboutUS} className="absolute inset-0 object-cover w-full h-full" alt="About Us" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          
        </div>
      </motion.div>

      <div className="flex flex-col items-center min-h-screen py-10">
        <div className="w-full max-w-5xl px-4 md:px-8">
          <div className='flex items-center justify-center mb-6'>
          <motion.div 
              className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaInfoCircle className="text-3xl" />
            </motion.div>
            <h1 
              className="ml-4 text-3xl font-bold text-center text-gray-800 "
              data-aos="fade-up"
            >
              Who We Are
            </h1>
          </div>
          <hr className="my-4 border-t-4 border-gray-400 dark:border-gray-600" data-aos="fade-right" />

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
              data-aos="fade-up"
            >
              <FaGlobe className="mb-4 text-4xl text-blue-500" />
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Global Reach</h2>
              <p className="leading-loose text-gray-700 dark:text-gray-300">
                Creating an online presence that represents your business is more important now than ever. We provide top quality websites to small and medium size businesses at affordable prices.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <FaBullseye className="mb-4 text-4xl text-green-500" />
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Focused Solutions</h2>
              <p className="leading-loose text-gray-700 dark:text-gray-300">
                We never stop improving, finding fresh ideas, and implementing updated technologies to make your business goals a reality.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <FaLightbulb className="mb-4 text-4xl text-yellow-500" />
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Innovative Ideas</h2>
              <p className="leading-loose text-gray-700 dark:text-gray-300">
                We bring fresh ideas to help your business stay ahead of the competition, turning concepts into dazzling websites that leave a lasting impression.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <FaArrowRight className="mb-4 text-4xl text-red-500" />
              <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Beyond Expectations</h2>
              <p className="leading-loose text-gray-700 dark:text-gray-300">
                We deliver complete web solutions, including SEO, SMO, and PPC services to enhance your online presence and drive targeted traffic to your website.
              </p>
            </motion.div>
          </div>

          <hr className="my-6 border-t-4 border-gray-400 dark:border-gray-600" data-aos="fade-left" />

          <p className="leading-loose text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="400">
            At <b>ByteVision Technologies</b>, we offer innovative website designs for any business or organization. Our team has the creativity, technology, and marketing expertise to make your vision a reality.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default SstAboutUs;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import logoDesign from '../images/logo.jpg';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';
import { FaCheckCircle, FaBrush } from 'react-icons/fa';

function LogoDesigning() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="container p-4 mx-auto">
<div className="flex flex-col items-center justify-center mx-4 my-10 md:flex-row md:mx-12" data-aos="fade-up">
  <div className="p-6 bg-white rounded-lg shadow-lg md:w-1/2" data-aos="fade-right">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
        <FaBrush className="text-4xl text-blue-500" />
      </div>
      <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Logo Designing</h2>
    </div>
    <p className="text-lg text-gray-700">
      <hr className="my-4 border-t-2 border-gray-300" />
      <b>"A logo does not regard entertainment or an art form, but as a medium of information."</b>
              In order to understand what a logo design is, it is important to first understand what a logo design is used for: branding and identification. A logo identifies a product or company through the portrayal of a symbol, mark, flag, or signature.
    </p>
  </div>
  <div className="p-4 md:w-1/2">
    <img src={logoDesign} alt="logo desiging" className="object-cover w-full h-auto rounded-lg shadow-md" />
  </div>
</div>

        {/* Advantages Section */}
        <motion.h1
          className="mx-4 mt-10 text-xl font-bold leading-tight text-gray-900 md:mx-6 lg:mx-16"
          data-aos="fade-up"
        >
          <b>Advantages Of Our Logo Designing</b>
        </motion.h1>
        <hr className="mx-4 my-4 border-gray-300 md:mx-6 lg:mx-16" />
        <motion.div
          className="pl-4 mx-4 md:pl-6 md:mx-6 lg:mx-16"
          data-aos="fade-up"
        >
          <ul className="pl-5 text-gray-700 list-disc">
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Brand Oriented
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Business Oriented
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Versatile
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Magnificent
            </li>
            <li className="flex items-center mb-2">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Professional
            </li>
          </ul>
        </motion.div>
        <motion.p
          className="mx-4 my-4 text-gray-700 md:mx-6 lg:mx-16"
          data-aos="fade-up"
        >
          And here we design the logo that summarizes your business ideas without any brainstorming.
        </motion.p>
      </div>
      <FooterMain />
    </div>
  );
}

export default LogoDesigning;






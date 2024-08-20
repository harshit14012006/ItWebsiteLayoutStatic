import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaCode } from 'react-icons/fa'; // Using React Icons for a development-related icon
import softDev from '../images/softDev.jpg';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function SoftwareDevelopment() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center mx-4 my-10 md:flex-row md:justify-between md:mx-12">
          <motion.div
            className="p-6 mb-8 bg-white rounded-lg shadow-lg md:w-1/2 md:mb-0"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <FaCode className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Software Development</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              We have demonstrated our abilities in delivering customized applications using cutting-edge technologies. Our customer-oriented approach enables us to deliver optimal solutions for your requirements.
              <br />
              At <b>ByteVision Technologies</b>, we focus on creating customer-oriented software applications. Our development team examines and analyzes the existing IT processes of the clients, performing gap analysis to ensure complete compatibility between existing systems and custom-developed applications. The applications are designed, tested, and deployed to the complete satisfaction of the clients.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            data-aos="fade-left"
          >
            <img src={softDev} alt="Software Development" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </motion.div>
        </div>

        <motion.h1
          className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12"
          data-aos="fade-up"
        >
          <b>Advantages of Our Software Development</b>
        </motion.h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />

        <motion.div
          className="mx-4 my-6 md:mx-12"
          data-aos="fade-up"
        >
          <ul className="space-y-3 list-disc">
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Fully Customized</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> User Friendly</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Easy to Learn</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Easy to Update</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Performance Oriented</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Custom web-based application development using technologies like ASP.NET</li>
          </ul>
        </motion.div>

        <motion.p
          className="mx-4 my-6 text-lg text-gray-700 md:mx-12"
          data-aos="fade-up"
        >
          We develop software that makes your business strategy easier and more effective and provides all your data in the format you want so you can plan your business accordingly. We create fully customized software that meets all your business needs.
        </motion.p>
      </div>

      <FooterMain />
    </div>
  );
}

export default SoftwareDevelopment;

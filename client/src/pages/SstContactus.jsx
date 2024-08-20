import React, { useEffect } from 'react';
import NavbarMain from '../components/NavbarMain';
import contactuspic from '../images/contactuspic.jpg';
import SstCardcontactus from '../components/SstCardcontactus';
import SstFormcontactus from '../components/SstFormcontactus';
import FooterMain from '../components/FooterMain';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SstContactus() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="bg-gray-100">
        <div className="relative overflow-hidden">
          <img
            src={contactuspic}
            alt='Contact Us'
            className="object-cover w-full h-auto max-h-60"
          />
        </div>

        <main className="px-4 py-10 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <motion.h2
              className="flex items-center justify-center space-x-3 text-4xl font-bold text-blue-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-up"
            >
              <FaMapMarkerAlt className="text-3xl" />
              <span>Contact Us</span>
            </motion.h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-800">
              For any inquiries, feedback, or assistance, feel free to reach out to us through the following channels:
            </p>
          </section>

          <section className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-8">
            {/* Phone Card */}
            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-right"
            >
              <FaPhone className="mb-4 text-3xl text-blue-600" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-700">+91 92541 47455</p>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-up"
            >
              <FaMapMarkerAlt className="mb-4 text-3xl text-blue-600" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700">123, Example Street, Sirsa</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              data-aos="fade-left"
            >
              <FaEnvelope className="mb-4 text-3xl text-blue-600" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-700">info@shrisatyait.com</p>
            </motion.div>
          </section>

          <section className="mt-12">
            <SstCardcontactus />
            <br />
            <SstFormcontactus />
          </section>
        </main>
      </div>
      <FooterMain />
    </div>
  );
}

export default SstContactus;

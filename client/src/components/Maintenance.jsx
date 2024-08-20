import React from 'react';
import Maintenance1 from '../images/service.jpg';
import { FaTools, FaCheckCircle } from 'react-icons/fa'; // Importing FaCheckCircle for the checklist icon
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function Maintenance() {
  return (
    <div>
      <NavbarMain />
      <div className="container p-4 mx-auto">
<div className="flex flex-col items-center justify-center mx-4 my-10 md:flex-row md:mx-12" data-aos="fade-up">
  <div className="p-6 bg-white rounded-lg shadow-lg md:w-1/2" data-aos="fade-right">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
        <FaTools className="text-4xl text-blue-500" />
      </div>
      <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Maintenance Services</h2>
    </div>
    <p className="text-lg text-gray-700">
      <hr className="my-4 border-t-2 border-gray-300" />
      <b>"It is better not to have a product if you do not have someone to keep it updated and well maintained."</b>
      We have just the right resources, skills, and manpower needed to keep your product updated, keeping it operational and trouble-free. A website maintenance service includes revising, editing, or otherwise changing existing web pages to keep your website up to date and operational. Website maintenance services basically refer to keeping your website up to date in terms of company news, latest developments, and new project deals.
    </p>
  </div>
  <div className="p-4 md:w-1/2">
    <img src={Maintenance1} alt="logo desiging" className="object-cover w-full h-auto rounded-lg shadow-md" />
  </div>
  </div>

        {/* Maintenance Services List */}
        <h1 className="mt-10 mb-4 text-2xl font-bold text-gray-900">Our Maintenance Services Include:</h1>
        <hr className="mb-6 border-gray-300" />
        <ul className="pl-5 space-y-2 list-disc">
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            CSS Updates
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Malware Removal
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Content Updates
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Re-structure your site contents
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Keep your website up-to-date
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Secure & Protect your site
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Modification and Addition of Website Content
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Update announcements, articles, etc.
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            Adding/removing pages
          </li>
          <li className="flex items-center text-gray-700">
            <FaCheckCircle className="w-5 h-5 mr-2 text-blue-500" />
            PDF creation and uploading
          </li>
        </ul>

        {/* Additional Information */}
        <div className="my-10">
          <p className="text-base text-gray-700">
            All websites need to be maintained in order to keep them up to date. Some sites need daily updates while others only need occasional maintenance. We can diagnose your product and have it back to you really fast for an affordable fee.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default Maintenance;




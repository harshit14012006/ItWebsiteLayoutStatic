import React from 'react';
import webdevpic from '../images/webdevpic.jpg';
import './SstWebsiteDevelopment.css';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function SstWebsiteDevelopment() {
  return (
    <div>
      <NavbarMain />
      <body className='backimg'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4'>
          <img src={webdevpic} className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto' alt='#' />
          <div className='pt-10'>
            <u><h2 className='text-2xl font-semibold'>Web Development</h2></u>
            <p className='pr-4 mt-4 mr-24 text-sm md:text-base'>
              Web development encompasses the back-end programming and interactions on websites. It focuses on ensuring sites work efficiently for users. At Shri Satya Technologies, we specialize in providing robust back-end solutions and ensuring optimal user interactions.
              Many people use the two terms "web design" and "web development" interchangeably, but they really do have two different meanings.</p>
          </div>
        </div>
        <p className='px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto'>
          This involves using programming languages like PHP, Python, Ruby, or JavaScript (Node.js) for tasks such as user authentication, database management, and integrating external services.
        </p>
        <p className='px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto'>
          Full-stack development combines front-end and back-end skills to manage all aspects of a project, from user interface to underlying functionality.
        </p>
        <p className='px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto'>
          Mobile development focuses on creating web applications optimized for mobile devices using frameworks like React Native or Flutter.
        </p>
        <p className='px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto'>
          Responsive web design ensures websites adapt and display properly across different devices and screen sizes, using CSS media queries and flexible layouts.
        </p>
        <br/>
      </body>
<br/>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}> <i className="fa fa-code"></i> </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">Front-end Development</h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">Front-end development deals with the client-side of web development. It involves creating the user interface and implementing the visual and interactive elements of a website or web application using HTML, CSS, and JavaScript. Front-end developers work on the look, feel, and functionality of the user-facing part of a website.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}> <i className="fa fa-server"></i> </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">Back-end Development</h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">Back-end development focuses on server-side programming and database management. It involves writing code in languages like PHP, Python, Ruby, or JavaScript (Node.js) to handle tasks such as data processing, server-side logic, and database interactions, ensuring the smooth functioning of websites and web applications.</p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default SstWebsiteDevelopment;

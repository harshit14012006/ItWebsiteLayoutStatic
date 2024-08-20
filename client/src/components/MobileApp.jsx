import React, { useEffect } from 'react';
import { FaMobileAlt, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import mob from '../images/mobLogo.png';
import logo from '../images/mobile.jpg';
import NavbarMain from './NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import FooterMain from './FooterMain';

function MobileApp() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center justify-center mx-4 my-10 md:flex-row md:mx-12">
          <div className="p-6 mb-6 bg-white rounded-lg shadow-lg md:w-1/2 md:mb-0" data-aos="fade-right">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <FaMobileAlt className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Mobile App Development</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              Mobile app development involves creating software applications designed to run on mobile devices, such as smartphones and tablets. This process encompasses designing user interfaces, coding functionality, and ensuring compatibility across different devices and operating systems. It aims to provide users with seamless, intuitive, and engaging experiences tailored to their needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={logo} alt="Mobile App Development" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <h1 className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12" data-aos="fade-up">Advantages of Mobile App Development</h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />

        <div className="mx-4 my-6 md:mx-12" data-aos="fade-up">
          <ul className="space-y-3 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Enhanced User Engagement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Accessibility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Brand Visibility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Direct Marketing Channel
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Improved Customer Loyalty
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Revenue Generation
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Performance
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Offline Functionality
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Data Collection
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Integration with Device Features
            </li>
          </ul>
        </div>

        <h1 className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12" data-aos="fade-up">The Role of User Experience in Mobile App Development</h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />
        <p className="mx-4 my-6 text-lg text-gray-700 md:mx-12" data-aos="fade-up">
          User experience (UX) is a critical factor in mobile app development, determining how users interact with and perceive an app. A well-designed UX ensures that the app is intuitive, easy to navigate, and visually appealing, which can significantly enhance user satisfaction and retention. Developers must consider various aspects such as layout, color schemes, font sizes, and touch-friendly interfaces to create an engaging experience. Furthermore, seamless integration with device features, quick load times, and minimal bugs are essential to maintain user interest. Regular updates and user feedback loops help in continuously improving the app's usability and functionality. By prioritizing UX, developers can create mobile applications that not only attract users but also encourage long-term engagement and loyalty.
        </p>
      </div>
      <FooterMain />
    </div>
  );
}

export default MobileApp;

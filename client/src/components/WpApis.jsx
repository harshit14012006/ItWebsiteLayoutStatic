import React, { useEffect } from 'react';
import { FaCogs, FaCheckCircle } from 'react-icons/fa'; // Updated icons
import wpLogo from '../images/wpLogo2.jpg';
import wpImage from '../images/wpApi.png';
import FooterMain from './FooterMain';
import NavbarMain from './NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function WpApis() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="container p-4 mx-auto">
        <div className="flex flex-col items-center justify-center mx-4 my-10 md:flex-row md:mx-12" data-aos="fade-up">
          <div className="p-6 bg-white rounded-lg shadow-lg md:w-1/2" data-aos="fade-right">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <FaCogs className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">WhatsApp APIs</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              WhatsApp APIs enable businesses to integrate WhatsApp messaging into their applications, allowing for automated and personalized communication with customers. These APIs support features such as sending messages, notifications, and media, enhancing customer engagement and support.
            </p>
          </div>
          <div className="p-4 md:w-1/2">
            <img src={wpImage} alt="WhatsApp APIs" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <div className="px-4 my-10 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Advantages of WhatsApp APIs</b></h1>
          <hr className="my-4 border-gray-300" />
          <ul className="pl-5 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Enhanced Customer Engagement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Automation
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Multimedia Support
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Secure Messaging
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Real-Time Communication
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Cost-Effective
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Integration with CRM Systems
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Analytics and Reporting
            </li>
          </ul>
        </div>

        <div className="px-4 my-10 text-lg text-gray-700 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Streamlining Customer Support with WhatsApp APIs</b></h1>
          <hr className="my-4 border-gray-300" />
          <p>
            WhatsApp APIs revolutionize customer support by providing a seamless and efficient communication channel. Businesses can automate responses to common queries, ensuring customers receive instant assistance even outside of regular business hours. The ability to send multimedia messages, such as images and videos, allows support teams to provide detailed instructions and solutions, enhancing the overall customer experience. Integration with CRM systems enables the storage and retrieval of customer interaction history, facilitating personalized support and faster issue resolution. Additionally, real-time messaging ensures that urgent issues are addressed promptly, boosting customer satisfaction and loyalty. By leveraging WhatsApp APIs, companies can create a more responsive and engaging support system that meets the demands of today's fast-paced digital world.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default WpApis;

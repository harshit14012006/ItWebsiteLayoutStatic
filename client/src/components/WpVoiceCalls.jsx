import React, { useEffect } from 'react';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import logo from '../images/wpLogo.webp';
import wp from '../images/voice.jpg';
import FooterMain from './FooterMain';
import NavbarMain from './NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function WpVoiceCalls() {
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
                <FaPhoneAlt className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Voice Calls</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              Voice calls provide a reliable and immediate way to communicate, allowing for clear and direct conversations regardless of distance. They offer a personal touch, enhancing understanding and connection through tone and inflection. Whether for personal or professional use, voice calls facilitate real-time, meaningful interactions.
            </p>
          </div>
          <div className="p-4 md:w-1/2">
            <img src={wp} alt="Voice Calls" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <div className="px-4 my-10 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Advantages of Voice Calls</b></h1>
          <hr className="my-4 border-gray-300" />
          <ul className="pl-5 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Real-Time Communication
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Personal Touch
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Clarity and Precision
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Efficiency
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Accessibility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Versatility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Security
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Compatibility
            </li>
          </ul>
        </div>

        <div className="px-4 my-10 text-lg text-gray-700 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>The Evolution of Voice Calls in the Digital Age</b></h1>
          <hr className="my-4 border-gray-300" />
          <p>
            Voice calls have come a long way since the days of landlines and rotary phones. With the advent of mobile technology and VoIP (Voice over Internet Protocol) services, making a call has never been more accessible or versatile. Modern smartphones offer high-definition voice quality, reducing background noise and enhancing clarity. Additionally, internet-based calling apps like WhatsApp, Skype, and Zoom have revolutionized how we connect, providing cost-effective and feature-rich alternatives to traditional calls. These platforms enable international communication without the hefty charges, making it easier to stay in touch with friends, family, and colleagues around the world. The integration of voice calls with other communication tools, such as video calls and instant messaging, creates a seamless user experience, blending various forms of interaction into a single, cohesive platform. As technology continues to advance, the future of voice calls promises even more innovation, with potential developments in AI-driven voice recognition and real-time language translation.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default WpVoiceCalls;

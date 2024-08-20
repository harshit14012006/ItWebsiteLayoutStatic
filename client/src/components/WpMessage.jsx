import React, { useEffect } from 'react';
import { FaCommentDots, FaCheckCircle } from 'react-icons/fa'; // Updated icons
import logo from '../images/wpMsg.png';
import wp from '../images/wp2.jpg';
import FooterMain from './FooterMain';
import NavbarMain from './NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function WpMessage() {
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
                <FaCommentDots className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">WhatsApp Messages</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              WhatsApp messages offer a reliable and instant way to communicate with friends, family, and businesses globally. They support text, voice, video, and multimedia, making conversations dynamic and interactive. WhatsApp messages provide a secure platform with end-to-end encryption, ensuring privacy in all communications.
            </p>
          </div>
          <div className="p-4 md:w-1/2">
            <img src={wp} alt="WhatsApp Messages" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <div className="px-4 my-10 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Advantages of WhatsApp Messages</b></h1>
          <hr className="my-4 border-gray-300" />
          <ul className="pl-5 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Instant Communication
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Multimedia Support
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              End-to-End Encryption
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Cross-Platform Compatibility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Status Updates
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              User-Friendly Interface
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Integration with Contacts
            </li>
          </ul>
        </div>

        <div className="px-4 my-10 text-lg text-gray-700 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Enhancing Business Communication with WhatsApp Messages</b></h1>
          <hr className="my-4 border-gray-300" />
          <p>
            WhatsApp messages are transforming the way businesses communicate with their customers. By leveraging WhatsApp's vast user base, businesses can reach their audience quickly and effectively. The app's multimedia capabilities allow companies to send promotional images, videos, and catalogs directly to customers, making marketing campaigns more interactive and engaging. Automated responses and chatbots can handle routine inquiries, freeing up human resources for more complex tasks. Additionally, the end-to-end encryption ensures that all business communications remain secure, fostering trust between the company and its customers. With features like broadcast lists and group chats, businesses can easily segment their audience and tailor messages to specific customer groups, improving the relevance and impact of their communications. Overall, WhatsApp messages offer a versatile and efficient platform for enhancing customer engagement and streamlining business operations.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default WpMessage;

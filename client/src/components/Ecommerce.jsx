import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaShoppingCart } from 'react-icons/fa'; // Import the React icon
import Maintenance1 from '../images/appEcom.png';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function Ecommerce() {
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
                <FaShoppingCart className="text-4xl text-blue-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Ecommerce App</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              An e-commerce app provides a seamless online shopping experience by allowing users to browse, select, and purchase products from their devices with ease. It integrates features such as secure payment processing, order tracking, and personalized recommendations to enhance user satisfaction and streamline transactions.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            data-aos="fade-left"
          >
            <img src={Maintenance1} alt="Website Design" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </motion.div>
        </div>

        <motion.h1
          className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12"
          data-aos="fade-up"
        >
          <b>Integrating Payment Gateways in Ecommerce Apps</b>
        </motion.h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />
        <motion.p
          className='mx-4 my-6 text-lg text-gray-700 md:mx-12'
          data-aos="fade-up"
        >
          Integrating payment gateways into e-commerce apps is crucial for facilitating secure and seamless transactions. Payment gateways act as intermediaries between the e-commerce platform and financial institutions, handling the encryption and authorization of payment information. This integration ensures that sensitive data, such as credit card numbers and personal details, is protected against fraud and unauthorized access. By offering multiple payment options, including credit cards, digital wallets, and bank transfers, businesses can cater to diverse customer preferences and enhance the overall user experience. Additionally, seamless payment integration helps in reducing cart abandonment rates by streamlining the checkout process and making it more convenient for users. Ensuring compliance with payment industry standards, such as PCI-DSS, is essential to maintaining trust and security in the payment process. Ultimately, a well-integrated payment gateway contributes to smoother transactions, improved customer satisfaction, and increased sales for e-commerce businesses.
        </motion.p>

        <motion.h1
          className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12"
          data-aos="fade-up"
        >
          <b>Advantages of an Ecommerce App</b>
        </motion.h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />
        <motion.div
          className='mx-4 my-6 md:mx-12'
          data-aos="fade-up"
        >
          <ul className='space-y-3 list-disc'>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Personalized Shopping Experience</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> 24/7 Accessibility</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Streamlined Transactions</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Increased Customer Engagement</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Enhanced Product Visibility</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Real-Time Order Tracking</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Cost Efficiency</li>
            <li className="flex items-center text-lg text-gray-700"><i className="mr-2 text-blue-500 fas fa-check-circle"></i> Data-Driven Insights</li>
          </ul>
        </motion.div>

        <motion.p
          className='mx-4 my-6 text-lg text-gray-700 md:mx-12'
          data-aos="fade-up"
        >
          An e-commerce app offers the advantage of 24/7 accessibility, allowing users to shop anytime and from anywhere, which can significantly increase sales opportunities. Additionally, it provides personalized shopping experiences through tailored recommendations and targeted promotions, enhancing user engagement and satisfaction.
        </motion.p>

        <motion.h1
          className="mx-4 my-8 text-3xl font-bold leading-tight text-gray-800 md:mx-12"
          data-aos="fade-up"
        >
          <b>Enhancing User Experience Through Mobile Optimization</b>
        </motion.h1>
        <hr className="mx-4 border-gray-300 md:mx-12" />
        <motion.p
          className='mx-4 my-6 text-lg text-gray-700 md:mx-12'
          data-aos="fade-up"
        >
          Mobile optimization is essential for ensuring a smooth and engaging user experience on mobile devices, where a significant portion of web traffic now originates. This involves designing and implementing features specifically tailored for smaller screens, such as touch-friendly navigation, readable font sizes, and fast-loading content. Responsive design principles, including flexible layouts and adaptive images, play a key role in making content accessible and visually appealing across various screen sizes. Additionally, optimizing page speed is critical for reducing load times and preventing user frustration, which can lead to higher bounce rates. Implementing mobile-specific functionalities, like location-based services or gesture controls, can further enhance the experience by leveraging the unique capabilities of mobile devices. Prioritizing mobile optimization not only improves user satisfaction but also positively impacts search engine rankings, as search engines increasingly factor mobile-friendliness into their algorithms. By focusing on these aspects, businesses can ensure their websites deliver a high-quality experience to mobile users, driving engagement and conversions.
        </motion.p>
      </div>
      <FooterMain />
    </div>
  );
}

export default Ecommerce;

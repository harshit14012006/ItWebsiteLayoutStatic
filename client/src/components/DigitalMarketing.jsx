import React, { useEffect } from 'react';
import { FaBullhorn, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import logo from '../images/onlineLogo.png';
import online from '../images/digital.jpg';
import FooterMain from './FooterMain';
import NavbarMain from './NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function DigitalMarketing() {
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
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full">
                <FaBullhorn className="text-4xl text-yellow-500" />
              </div>
              <h2 className="ml-4 text-3xl font-bold leading-tight text-gray-800">Digital Marketing (SEO & SMO)</h2>
            </div>
            <p className="text-lg text-gray-700">
              <hr className="my-4 border-t-2 border-gray-300" />
              Digital marketing combines SEO (Search Engine Optimization) and SMO (Social Media Optimization) to enhance a brand's online presence and drive traffic. SEO focuses on improving website visibility in search engine results through keyword optimization, content quality, and technical improvements, helping attract organic traffic. SMO, on the other hand, leverages social media platforms to increase brand awareness, engage with the audience, and drive traffic through strategic content sharing and targeted advertising.
            </p>
          </div>
          <div className="p-4 md:w-1/2">
            <img src={online} alt="Digital Marketing" className="object-cover w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <div className="px-4 my-10 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Advantages Of Search Engine Optimization</b></h1>
          <hr className="my-4 border-gray-300" />
          <ul className="pl-5 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Search Engine Optimization
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Social Media Optimization
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Pay Per Click
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Customer Oriented
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Brand Oriented
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Millions of Customers
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Versatile
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Strong web presence
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Targeted Traffic
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Manage files such as photos and documents
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Ever increasing sales
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Long term positioning
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              More revenue
            </li>
          </ul>
        </div>

        <div className="px-4 my-10 md:px-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold leading-tight text-gray-800"><b>Advantages Of Social Media Optimization</b></h1>
          <hr className="my-4 border-gray-300" />
          <ul className="pl-5 text-lg text-gray-700 list-disc">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Increased Brand Visibility
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Enhanced Customer Engagement
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Improved Search Engine Rankings
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Targeted Advertising
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Higher Website Traffic
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Better Customer Insights
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Cost-Effective Marketing
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Brand Loyalty and Trust
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-yellow-500" />
              Competitive Advantage
            </li>
          </ul>
        </div>

        <div className="px-4 my-10 text-lg text-gray-700 md:px-12" data-aos="fade-up">
          <p>
            Many businesses seem to think that a company logo on a banner ad is enough to get people to click on it. But it's not. Remember that an online customer is already engaged and focused--unlike a radio listener or even a TV viewer, who may only be half paying attention or out of the room when an ad appears. You want to take advantage of that focus while web surfers' fingers are on their keyboards.
            <br />
            Having a website is not synonymous with internet marketing. The internet is vast and your website may be easily lost among millions of other similar sites. You need the help of a specialist to market your products and services online. So, we not only prepare a website for you, we also promote your website in search engines for better results.
          </p>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default DigitalMarketing;

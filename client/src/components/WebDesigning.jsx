import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import web from '../images/web2.jpg';
import webDev from '../images/webDev.jpg';
import single from '../images/singlePage.webp';
import dynamic from '../images/dynamic1.jpeg';
import flash from '../images/flash.webp';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function WebDevelopment() {
  const [showWebDesign, setShowWebDesign] = useState(true);

  return (
    <div>
      <NavbarMain />
      <div className="container px-4 py-8 mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowWebDesign(true)}
            className={`px-6 py-3 rounded-l-lg ${showWebDesign ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} transition duration-300 ease-in-out`}
          >
            Web Designing
          </button>
          <button
            onClick={() => setShowWebDesign(false)}
            className={`px-6 py-3 rounded-r-lg ${!showWebDesign ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} transition duration-300 ease-in-out`}
          >
            Website Development
          </button>
        </div>

        {/* Web Designing Section */}
        {showWebDesign && (
          <div className="mx-auto my-12">
            <div className="flex flex-col items-start justify-between mb-12 md:flex-row">
              <div className="p-4 md:w-1/2">
                <h2 className="text-3xl font-semibold leading-tight text-center md:text-left">WEB DESIGNING</h2>
                <p className="mt-4 text-lg text-center md:text-left">
                  <hr className="my-4 border-t-2 border-black" />
                  A website is the face of your company that can be read all over the world. Whether you are a professional, own a small business, or want a corporate website, we have every solution for you within a budget that you can't imagine.
                </p>
              </div>
              <div className="p-4 md:w-1/2">
                <img className="w-full h-auto rounded-lg shadow-lg" src={web} alt="Website Design" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { img: flash, title: 'Responsive Web Designing', desc: 'Ensures a seamless user experience across various devices by adapting the layout and content dynamically.', link: '/responsive-web' },
                { img: single, title: 'Single Page Designing', desc: 'Often used for portfolios and product sites, offering a seamless and engaging user experience without the need for multiple page loads.', link: '/single-page-web' },
                { img: dynamic, title: 'Dynamic Web Designing', desc: 'In today’s market scenario, every business needs a solid web presence to attract visitors.', link: '/dynamic-web' }
              ].map((item, index) => (
                <div key={index} className="max-w-sm overflow-hidden transition-transform duration-300 ease-in-out transform border border-transparent rounded-lg shadow-lg hover:scale-105 hover:border-blue-500">
                  <img className="object-cover w-full h-48" src={item.img} alt={item.title} />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold text-center">{item.title}</div>
                    <hr className="border-black" />
                    <p className="mt-4 text-base text-center text-gray-700">{item.desc}</p>
                    <div className="mt-6 text-center">
                      <Link to={item.link} className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-600 rounded hover:bg-blue-800">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Website Development Section */}
        {!showWebDesign && (
          <div className="mx-auto my-12">
            <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
              <div className="p-4 md:w-1/2">
                <div className="flex items-center">
                  <img src={web} className="object-cover w-12 h-12 rounded-full" alt="Web Design" />
                  <h2 className="ml-4 text-3xl font-semibold leading-tight">WEBSITE DEVELOPMENT</h2>
                </div>
                <p className="mt-4 text-lg">
                  <hr className="my-4 border-t-2 border-black" />
                  Many people use the terms "web design" and "web development" interchangeably, but they have different meanings. If you're looking for a job or someone to build your website, you need to know the difference.
                </p>
              </div>
              <div className="p-4 md:w-1/2">
                <img src={webDev} alt="Website Development" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="mx-4 md:mx-40">
              <h1 className="text-2xl font-bold leading-tight">WEBSITE DEVELOPMENT</h1>
              <hr className="my-4 border-black" />
              <p className="my-6">
              Web development is the back-end of the website, the programming and interactions on the pages. A web developer focuses on how a site works and how the customers get things done on it. Good web developers know how to program CGI and scripts like PHP. They understand about how web forms work and can keep a site running effectively.
                    <br />At <b>Shri Satya Technologies</b>, we provide back-end of the website, the programming and interactions on the pages. Our web developer focuses on how a site works and how easily the customers get things done on it.
                </p>
            </div>
          </div>
        )}
      </div>
      <FooterMain />
    </div>
  );
}

export default WebDevelopment;

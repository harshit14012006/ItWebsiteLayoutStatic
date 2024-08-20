import React from 'react';
import { Link } from 'react-router-dom';
import './SstHomeServices.css'
import webdevhome from '../images/webdevhome.jpg';
import softhome from '../images/softhome.jpg';
import ecomhome from '../images/ecomhome.jpg';
import maintenancehome from '../images/maintenancehome.png';
import digitalwebhome from '../images/digitalwebhome.jpeg';
import voicecalls from '../images/voicecalls.webp';
import wpmsghome from '../images/wpmsghome.jpeg';
import wpapishome from '../images/wpapishome.jpeg';
import logodeshome from '../images/logodeshome.jpg';

const cards = [
  {
    link: "/web-development-designing",
    img: webdevhome,
    title: "Web Development",
    description: "Many people use the two terms 'web design' and 'web development' interchangeably, but have different meanings.",
  },
  {
    link: "/software-development",
    img: softhome,
    title: "Software Development",
    description: "We have demonstrated our abilities in delivering customized applications using cutting-edge technologies.",
  },
  {
    link: "/e-commerce",
    img: ecomhome,
    title: "E-Commerce App",
    description: "An e-commerce app provides a seamless online shopping experience by allowing users to browse, select.",
  },
  {
    link: "/mobile-app",
    img: softhome,
    title: "Mobile-App",
    description: "Mobile app development involves creating software applications designed to run on mobile devices, such as smartphones and tablets.",
  },
  {
    link: "/maintenance",
    img: maintenancehome,
    title: "Maintenance Services",
    description: "It is better not to have a product if you do not have someone to keep it updated and well maintained.",
  },
  {
    link: "/digital-marketing",
    img: digitalwebhome,
    title: "Digital Marketing",
    description: "Digital marketing combines SEO (Search Engine Optimization) and SMO (Social Media Optimization).",
  },
  {
    link: "/voice-calls",
    img: voicecalls,
    title: "Voice Calls",
    description: "Integrate voice call functionalities into your application for better communication.",
  },
  {
    link: "/whatsapp-messages",
    img: wpmsghome,
    title: "WhatsApp Messages",
    description: "WhatsApp messages offer a reliable and instant way to communicate with friends.",
  },
  {
    link: "/whatsapp-apis",
    img: wpapishome,
    title: "WhatsApp APIs",
    description: "WhatsApp APIs enable businesses to integrate WhatsApp messaging into their applications.",
  },
  {
    link: "/logo-designing",
    img: logodeshome,
    title: "Logo Designing",
    description: "A logo does not regard entertainment or an art form, but as a medium of information."
  },
];

function SstHomeServices() {
  return (
    <div className="relative w-full py-8">
      <div className="a overflow-hidden">
        <div className="a flex animate-marquee">
          {cards.map((card, index) => (
            <div key={index} className="a flex-none w-64 sm:w-72 md:w-80 lg:w-96 p-4">
              <Link to={card.link} className="block bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative bg-cover bg-center h-48">
                  <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-700 mb-2 flex-1">{card.description}</p>
                  <p className="text-white text-sm rounded-lg font-medium bg-gray-700 max-w-24 p-1 pl-3">Read More</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SstHomeServices;

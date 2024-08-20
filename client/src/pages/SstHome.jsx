import NavbarMain from '../components/NavbarMain'
import React, { useState, useEffect } from 'react';
import webdeshomeslide from '../images/webdeshomeslide.png';
import digitalhomeslide from '../images/digitalhomeslide.png';
import maintenancehomeslide from '../images/maintenancehomeslide.png';
import ecommercehomeslide from '../images/ecommercehomeslide.png';
import mobileapphomeslide from '../images/mobileapphomeslide.png';
import softdevslide from '../images/softdevslide.jpg';
import webdevhomeslide from '../images/webdevhomeslide.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './SstHome.css'
import webdevhome from '../images/webdevhome.jpg';
import softhome from '../images/softhome.jpg';
import ecomhome from '../images/ecomhome.jpg';
import maintenancehome from '../images/maintenancehome.png';
import digitalwebhome from '../images/digitalwebhome.jpeg';
import voicecalls from '../images/voicecalls.webp';
import wpmsghome from '../images/wpmsghome.jpeg';
import wpapishome from '../images/wpapishome.jpeg';
import logodeshome from '../images/logodeshome.jpg';
import vscode from '../images/vscode.jpg';
import reactlogo from '../images/reactlogo.jpg';
import nodejslogo from '../images/nodejslogo.jpg';
import bootstraplogo from '../images/bootstraplogo.png'
import mvclogo from '../images/mvclogo.png'
import expresslogo from '../images/expresslogo.webp'
import FooterMain from '../components/FooterMain';
function SstHome() {
  const frameworks = [
    { src: vscode, alt: "VS Code", title: "Microsoft Visual Studio", desc: "Supports almost every major programming language with extensions available." },
    { src: mvclogo, alt: "mvc", title: "MVC", desc: "The model layer is responsible for the application's data logic and storing and retrieving data from back-end data stores. " },
    { src: bootstraplogo, alt: "HTML", title: "Bootstrap", desc: "Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page." },
    { src: reactlogo, alt: "React Js", title: "React Js", desc: "A JavaScript library for building UI components, efficiently updating only what needs to be changed." },
    { src: expresslogo, alt: "express", title: "Express Js", desc: "In this first Express article we answer the questions Opinionated frameworks are those with opinions about the right way to handle any particular task." },
    { src: nodejslogo, alt: "Node.js", title: "Node.js", desc: "An open-source JavaScript runtime that allows for fast and scalable server-side applications." }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [webdevhomeslide, webdeshomeslide, softdevslide, ecommercehomeslide, mobileapphomeslide, maintenancehomeslide, digitalhomeslide];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
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
  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
      text: "Our aim to spread all information about Sh.Khatu Shayam Dham among the devotees of Shyam baba is cracked after having a versatile....",
      author: "Client 1",
    },
    {
      text: "It’s an absolute pleasure to work with the team. Their quality of work and i recive bussiness from diffrent part of country",
      author: "Client 2",
    },
    {
      text: "The website has significantly improved our business. It’s user-friendly, andWithin a few days of launching, it started to give positive response to our business.",
      author: "Client 3",
    },
    {
      text: "The team’s expertise and dedication were instrumental in meeting our project these are for thire aspects of improving the some an & when requirement arises",
      author: "Client 4",
    },
  ];

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div>
      <NavbarMain />
      <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-0 p-4 text-3xl text-white transform -translate-y-1/2 bg-transparent rounded-full shadow-lg top-1/2">
        &#10094;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 p-4 text-3xl text-white transform -translate-y-1/2 bg-transparent rounded-full shadow-lg top-1/2">
        &#10095;
      </button>
    </div>
    <Helmet>
        <meta name="description" content="ByteVision Technologies offers catchy and proficient website designs for corporate, business, social, and other organizations." />
        <meta name="keywords" content="ByteVision Technologies, website design, corporate, business, social organizations, data management, cybersecurity solutions" />
        <meta name="author" content="ByteVision Technologies" />
        <title>ByteVision Technologies</title>
      </Helmet>
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="my-4 text-3xl font-light text-red-600">Building Tomorrow's Tech, Today.</h2>
          <hr className="w-48 h-1 mx-auto my-4 bg-red-600 border-0 rounded" />
          <p className="text-base leading-relaxed">
            At <strong className="font-semibold">ByteVision Technologies</strong>, we have a team of experts to offer catchy and proficient website designs for any corporate, business, social, and other organizations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4 mb-8 sm:w-1/3">
            <div className="flex flex-col items-center h-48 p-6 text-center bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/one-stop-shop-icon.png" className="object-contain w-20 h-20" alt="One stop shop for the best cybersecurity and data management products" />
              </div>
              <div className="text-base">
                One stop shop for the best cybersecurity and data management products
              </div>
            </div>
          </div>

          <div className="w-full px-4 mb-8 sm:w-1/3">
            <div className="flex flex-col items-center h-48 p-6 text-center bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/simple-adoption-icon.png" className="object-contain w-20 h-20" alt="Simple adoption with 100% software solutions" />
              </div>
              <div className="text-base">
                Simple adoption with 100% software solutions
              </div>
            </div>
          </div>

          <div className="w-full px-4 mb-8 sm:w-1/3">
            <div className="flex flex-col items-center h-48 p-6 text-center bg-white rounded-lg shadow-lg">
              <div className="mb-4">
                <img width="75" height="85" src="https://we-bridge.com/wp-content/uploads/2021/10/entreprise-level-product-icon.png" className="object-contain w-20 h-20" alt="Affordable Enterprise-level products for Enterprises" />
              </div>
              <div className="text-base">
                Affordable Enterprise-level products for Enterprises.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full py-8">
      <div className="overflow-hidden a">
        <div className="flex a animate-marquee">
          {cards.map((card, index) => (
            <div key={index} className="flex-none w-64 p-4 a sm:w-72 md:w-80 lg:w-96">
              <Link to={card.link} className="flex flex-col block h-full overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative h-48 bg-center bg-cover">
                  <img src={card.img} className="object-cover w-full h-full" alt={card.title} />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                  <p className="flex-1 mb-2 text-gray-700">{card.description}</p>
                  <p className="p-1 pl-3 text-sm font-medium text-white bg-gray-700 rounded-lg max-w-24">Read More</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <section className="py-12 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white">
          Frameworks We Use
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((item, index) => (
            <div key={index} className="flex items-start p-4 space-x-4 transition-transform border rounded-lg shadow-lg hover:scale-105">
              <img src={item.src} alt={item.alt} className="w-16 h-16 transition-transform transform border-2 border-gray-300 rounded-full dark:border-gray-600 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="testimonials" aria-label="What our customers are saying" className="py-20 bg-slate-50 sm:py-30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto md:text-center">
            <h2 className="text-2xl font-light tracking-tight text-red-600 font-display sm:text-3xl">Our happy clients say about us....</h2>
            <hr class="w-48 h-1 mx-auto my-4 border-0 rounded  bg-red-600"/>
          </div>
          <ul role="list" className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <li key={index}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10">
                      <svg aria-hidden="true" style={{ width: "105", height: "78" }} className="absolute left-6 top-6 fill-slate-100">
                        <path
                          d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                        </path>
                      </svg>
                      <blockquote className="relative">
                        <p className={`text-base tracking-tight text-slate-900 overflow-hidden ${expandedIndex === index ? 'h-auto' : 'h-24'}`}>
                          {testimonial.text}
                        </p>
                      </blockquote>
                      <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                        <figcaption className="text-sm font-semibold font-display text-slate-900">
                          {testimonial.author}
                        </figcaption>
                        <button
                          className="p-2 text-xs text-white bg-gray-700 rounded-lg hover:bg-gray-700 hover:text-gray-100"
                          onClick={() => handleReadMoreClick(index)}
                        >
                          {expandedIndex === index ? 'Read Less' : 'Read More'}
                        </button>
                      </div>
                    </figure>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FooterMain/>
    </div>
  )
}

export default SstHome
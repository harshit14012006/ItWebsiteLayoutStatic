import React from "react";
import Logo from "../images/contant3.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
function SatyaFooter() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold  mb-4">
              Development
            </h3>
            <div className="pl-4 md:pl-2">
              <ul className="list-disc">
                <Link to="/web-development-designing">
                  {" "}
                  <li>Web Development</li>{" "}
                </Link>
                <Link to="/software-development">
                  {" "}
                  <li>Software Development</li>
                </Link>
                <Link to="/e-commerce">
                  {" "}
                  <li>E-Commerce App</li>
                </Link>
                <Link to="/mobile-app">
                  {" "}
                  <li>Mobile App Development</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Marketing</h3>
            <div className="pl-4 md:pl-2">
              <ul className="list-disc">
                <Link to="/digital-marketing">
                  {" "}
                  <li>Digital Marketing</li>
                </Link>
                <Link to="/voice-calls">
                  {" "}
                  <li>Voice Calls</li>
                </Link>
                <Link to="/whatsapp-apis">
                  {" "}
                  <li>WhatsApp Apis</li>
                </Link>
                <Link to="/whatsapp-messages">
                  {" "}
                  <li>WhatsApp Messages</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Services</h3>
            <div className="pl-4 md:pl-2">
              <ul className="list-disc">
                <Link to="/maintenance">
                  {" "}
                  <li>Maintenance Services</li>
                </Link>
                <Link to="/logo-designing">
                  {" "}
                  <li>Logo Designing</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-2">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Contact Information
            </h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Nathuram SHO Street Old,
              Sabzi Mandi,
            </p>
            <p>Shubhash Chowk, Sirsa (125055), Haryana</p>
            <p>
              <i className="fas fa-phone"></i> +91-9254147455
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@shrisatyait.com
            </p>
            <p>Business Hours (9:00 AM to 6:00 PM) IST</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-start">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex flex-col md:flex-row justify-between items-center py-1 mt-4">
          <p className="text-center md:text-left">
            &nbsp; &copy; 2013 All Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0">
            <a
              href="#"
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded text-black flex items-center justify-center"
            >
              <i className="fas fa-arrow-circle-up mr-2"></i>
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SatyaFooter;

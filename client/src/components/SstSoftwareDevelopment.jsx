import React from "react";
import softwaredevpic from "../images/softwaredevpic.jpg";
import "./SstSoftwareDevelopment.css";
import NavbarMain from "./NavbarMain";
import FooterMain from "./FooterMain";
import softDev from '../images/softDev.jpg'
function SstSoftwareDevelopment() {
  return (
    <div>
      <NavbarMain />
      <body className="backimg">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4">
          <img
            src={softDev}
            className="pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto"
            alt="#"
          />
          
          <div className="pt-10 mt-8">
            <u>
              <h2 className="text-2xl font-semibold">Software Development</h2>
            </u>
            <p className="pr-4 mt-4 mr-24 text-sm md:text-base">
            At <b>Shri Satya Technologies</b>, we strongly focused on creating customer oriented software applications. Our development team minutely examines and analyses the existing IT processes of the clients. It does the gap analysis to ensure complete compatibility between existing system and custom developed application. The supplications are designed, tested and deployed to complete satisfaction of the clients.
            </p>
          </div>
        </div>
        <p className="px-4 mt-4 mx-20 text-sm md:text-base max-w-7xl mx-auto">
          Software development involves the process programmers use to build
          computer programs, known as the Software Development Life Cycle
          (SDLC). It includes phases that ensure products meet technical
          specifications and user requirements.
        </p>
        <p className="px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto">
          Needs identification is crucial, involving market research to
          determine a product's viability and gathering feedback from potential
          customers.
        </p>
        <p className="px-4 mt-4 text-sm mx-20 md:text-base max-w-7xl mx-auto">
          Requirement analysis, the second phase, defines technical and user
          requirements to outline the product's scope, tasks, and testing
          parameters.
        </p><br/>
      </body>
<br/>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}>
              {" "}
              <i className="fa fa-code"></i>{" "}
            </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Comprehensive Solutions
            </h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
              Our agency offers end-to-end software development solutions,
              guiding you through the entire lifecycle of your project. From
              concept and design to development, testing, and deployment, our
              team of skilled experts ensures a seamless and successful journey.Software developers write the actual code according to the design specifications provided.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}>
              {" "}
              <i className="fa fa-paintbrush"></i>{" "}
            </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Customized Approach
            </h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
              We understand that every business has specific requirements. With
              our expertise in custom software development, we create
              tailor-made solutions that align perfectly with your vision and
              objectives. By leveraging the latest technologies and industry
              best practices, we deliver high-performance software that helps
              your business thrive.
            </p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default SstSoftwareDevelopment;

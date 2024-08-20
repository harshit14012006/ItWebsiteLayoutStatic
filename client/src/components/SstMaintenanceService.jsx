import React from "react";
import maintenanceserviceimg from "../images/maintenanceserviceimg.jpg";
import "./SstMaintenanceService.css";
import NavbarMain from "./NavbarMain";
import FooterMain from "./FooterMain";

function SstMaintenanceService() {
  return (
    <div>
      <NavbarMain />
      <body className="backimg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
          <img
            src={maintenanceserviceimg}
            className="pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto"
            alt="#"
          />
          <div className="mt-6 mr-24">
            <u>
              <h2 className="text-2xl pt-4 font-semibold">
                Maintenance Services
              </h2>
            </u>
            <p className="pr-4 pt-2 text-sm md:text-base">
              "It is better not to have a product if you do not have someone to
              keep it updated and well maintained." We have just the right
              resources, skills and manpower needed to keep your product
              updated, keeping it operational and trouble free. A website
              maintenance services includes revising, editing, or otherwise
              changing in existing web pages to keep your website up to date and
              operational.
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-normal font-bold leading-tight mx-40"><b>Our Maintenance Services Includes:</b></h1>
                <hr className="border-black mx-40" />
                <div className='pl-7'>
                    <ul className='mx-40  listex'>
                        <li>CSS Updates</li>
                        <li>Malware Removal</li>
                        <li>Content Updates</li>
                        <li>Re-structure your site contents</li>
                        <li>Keep your website up-to-date</li>
                        <li>Secure & Protect your site</li>
                        <li>Modification and Addition of Website Content</li>
                        <li>Update announcements, articles, etc.</li>
                        <li>Adding/removing pages</li>
                        <li>PDF creation and uploading</li>
                    </ul><br/>
                </div>
               
      </body>
<br/>
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}>
              {" "}
              <i className="fa fa-code"></i>{" "}
            </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Web app / website maintenance services
            </h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
              We will monitor your website carefully to keep it secure,
              relevant, and updated. To be more specific, we optimize the web
              page speed, update software and plugins, search for broken links
              and 404 errors and fix them. This way, you will be able to gain
              more visitors to your website.We provide ongoing maintenance and support for custom web applications of all sizes.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 py-4">
          <div className="bg-white py-4 px-8 rounded-lg shadow-lg">
            <span style={{ color: "blue" }}>
              {" "}
              <i className="fa fa-server"></i>{" "}
            </span>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Troubleshooting & root cause analysis
            </h5>
            <p className="mb-3 text-base text-gray-500 dark:text-gray-400">
              In case of an emergency, we perform a root cause analysis to
              understand the real causes behind this issue to prevent such
              mistakes in the future. When fixing issues, our specialists follow
              the troubleshooting approach to identify the key reasons why your
              digital product is not working as it should and what can be done
              to resolve this problem.
            </p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default SstMaintenanceService;

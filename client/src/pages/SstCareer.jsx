import React, { useEffect } from "react";
import NavbarMain from "../components/NavbarMain";
import FooterMain from "../components/FooterMain";
import { FaDoorOpen, FaBars, FaMoneyBillWave, FaPhoneAlt, FaFilePdf, FaPhone} from 'react-icons/fa';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import currentopeningpic from '../images/currentopeningpic.jpeg';

function SstCareer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
        <img src={currentopeningpic} className="object-cover w-full h-56" alt="Current Openings" />
        
        <main className="px-6 py-10 md:px-20">
          <section className="mb-12 text-center" data-aos="fade-up">
            <h2 className="flex items-center justify-center space-x-3 text-4xl font-bold text-blue-700">
              <FaDoorOpen className="text-3xl" />
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.8 }}
              >
                Current Openings
              </motion.span>
            </h2>
            <p className="max-w-full mx-auto mt-4 text-lg text-gray-800">
              <span className="font-semibold text-blue-800">ByteVision Technologies</span>{" "}
              is a place where different people come together as one team, get creative,
              and deliver results. If you want to be part of a new and rising team and
              have the essential qualifications, you can send your updated resume as per
              the following:
            </p>
          </section>

          <section className="px-4 md:px-10">
            <div className="space-y-10">
              {/* Job Listing 1 */}
              <motion.div 
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                data-aos="fade-up"
              >
                <h3 className="flex items-center mb-4 text-2xl font-semibold text-gray-900">
                  <FaBars className="mr-2 text-xl text-blue-600" />
                  Application Programmer
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div><span className="font-semibold">Qualification:</span> B.Tech. or MCA</div>
                  <div><span className="font-semibold">Skills Required:</span> ASP.Net With Good Command on SQL Server</div>
                  <div><span className="font-semibold">Job Field:</span> IT/ Software Services</div>
                  <div><span className="font-semibold">Experience:</span> 1-2 Years (Fresher may also apply)</div>
                  <div><span className="font-semibold">Salary Offered:</span> Best in the Industry</div>
                  <div><span className="font-semibold">Location:</span> Sirsa</div>
                </div>
              </motion.div>

              {/* Job Listing 2 */}
              <motion.div 
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                data-aos="fade-up"
              >
                <h3 className="flex items-center mb-4 text-2xl font-semibold text-gray-900">
                  <FaMoneyBillWave className="mr-2 text-xl text-blue-600" />
                  Marketing Executive
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div><span className="font-semibold">Qualification:</span> Graduate in any stream</div>
                  <div><span className="font-semibold">Skills Required:</span> Good Command in English with basic knowledge of Computer</div>
                  <div><span className="font-semibold">Job Field:</span> IT/ Software Services</div>
                  <div><span className="font-semibold">Experience:</span> 0-6 Months (Fresher may also apply)</div>
                  <div><span className="font-semibold">Salary Offered:</span> Attractive Salary + Incentive + TA + DA</div>
                  <div><span className="font-semibold">Location:</span> Haryana, Punjab, Rajasthan, Delhi, NCR, Chandigarh</div>
                </div>
              </motion.div>

              {/* Job Listing 3 */}
              <motion.div 
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                data-aos="fade-up"
              >
                <h3 className="flex items-center mb-4 text-2xl font-semibold text-gray-900">
                  <FaPhoneAlt className="mr-2 text-xl text-blue-600" />
                  Tele Caller (Female Only)
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div><span className="font-semibold">Qualification:</span> B.Tech. or MCA</div>
                  <div><span className="font-semibold">Skills Required:</span> ASP.Net With Good Command on SQL Server</div>
                  <div><span className="font-semibold">Job Field:</span> IT/ Software Services</div>
                  <div><span className="font-semibold">Experience:</span> 0-6 Months (Fresher may also apply)</div>
                  <div><span className="font-semibold">Salary Offered:</span> Attractive Salary</div>
                  <div><span className="font-semibold">Location:</span> Sirsa</div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="my-12 text-center" data-aos="fade-up">
            <h2 className="flex items-center justify-center mb-4 space-x-3 text-3xl font-bold text-blue-700">
              <FaFilePdf className="text-2xl" />
              <span>Submit Your Updated Resumes</span>
            </h2>
            <p className="text-lg text-gray-800">
              <a href="mailto:resume@shrisatyait.com" className="inline-block px-4 py-2 text-white bg-gray-700 rounded-lg">
                Email Us: resume@shrisatyait.com
              </a>
            </p>
          </section>

          <div className="relative flex items-center justify-center my-8" data-aos="fade-up">
            <hr className="w-64 h-px bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium text-gray-900 bg-white">or</span>
          </div>

          <section className="my-12 text-center" data-aos="fade-up">
            <h2 className="flex items-center justify-center mb-4 space-x-3 text-3xl font-bold text-blue-700">
              <FaPhone className="text-2xl" />
              <span>You May Also Contact Our Support Lines</span>
            </h2>
            <p className="text-lg text-gray-800">
              <a href="tel:+919254147455" className="inline-block px-4 py-2 text-white bg-gray-700 rounded-lg">
                Help Number: +91 92541 47455
              </a>
            </p>
            <p className="mt-2 text-lg text-gray-800">
              <br/>
             Our team works between 9:00 AM to 6:30 PM IST Monday to Saturday. You can contact us as mentioned above.
            </p>
          </section>
        </main>
      </div>
      <FooterMain />
    </div>
  );
}

export default SstCareer;

import React from 'react';

function SstCardcontactus() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 min-h-screen py-12">
      <h2 className="text-4xl text-center font-bold text-blue-700 mb-12 animate-bounce font-poppins">
        <i className="fas fa-mobile text-4xl mr-3"></i> Contact Us
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <div className="w-full max-w-md bg-white rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 font-poppins">
              Administrative Office
            </h3>
            <p className="text-gray-700 font-open-sans">
              Shri Satya Technologies
              <br />
              #1st Floor, Near Chawla Sweets,
              <br />
              Circular Road, Sirsa-125055
              <br />
              Haryana, INDIA
            </p>
          </div>
        </div>
        <div className="w-full max-w-md bg-white rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 font-poppins">
              For Any Query & Information
            </h3>
            <p className="text-gray-700 font-open-sans">
              Support Line: +91 92541 47455
              <br />
              E-mail: info@shrisatyait.com
              <br />
              Our team works between 9:00 AM to 6:30 PM IST Monday to Saturday.
              <br />
              You can contact us as mentioned above.
            </p>
          </div>
        </div>
        <div className="w-full max-w-md bg-white rounded-lg border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 font-poppins">
              For Order
            </h3>
            <p className="text-gray-700 font-open-sans">
              Support Line: +91 92541 47455
              <br />
              +91-94660-47455
              <br />
              E-mail: order@shrisatyait.com
              <br />
              Our team works between 9:00 AM to 6:30 PM IST Monday to Saturday.
              <br />
              You can contact us as mentioned above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SstCardcontactus;

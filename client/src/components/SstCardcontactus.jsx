import React from 'react';

function SstCardcontactus() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <h2 className="mb-12 text-4xl font-bold text-center text-blue-700 animate-bounce font-poppins">
        <i className="mr-3 text-4xl fas fa-mobile"></i> Contact Us
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <div className="w-full max-w-md transition-transform duration-300 transform bg-white border border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:border-yellow-400">
          <div className="p-6">
            <h3 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b-2 border-blue-500 font-poppins">
              Administrative Office
            </h3>
            <p className="text-gray-700 font-open-sans">
               ByteVision Technologies
              <br />
              #1st Floor, Example Street,
              <br />
              Sirsa-125***
              <br />
              Haryana, INDIA
            </p>
          </div>
        </div>
        <div className="w-full max-w-md transition-transform duration-300 transform bg-white border border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:border-yellow-400">
          <div className="p-6">
            <h3 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b-2 border-blue-500 font-poppins">
              For Any Query & Information
            </h3>
            <p className="text-gray-700 font-open-sans">
              Support Line: +91 98964 *****
              <br />
              E-mail: *******@gmail.com
              <br />
              Our team works between 9:00 AM to 6:30 PM IST Monday to Saturday.
              <br />
              You can contact us as mentioned above.
            </p>
          </div>
        </div>
        <div className="w-full max-w-md transition-transform duration-300 transform bg-white border border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:border-yellow-400">
          <div className="p-6">
            <h3 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b-2 border-blue-500 font-poppins">
              For Order
            </h3>
            <p className="text-gray-700 font-open-sans">
              Support Line: +91 98964 *****
              <br />
              +91-98964 *****
              <br />
              E-mail: *****@gmail.com
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

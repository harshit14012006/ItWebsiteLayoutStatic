import React from 'react';
import sstinfologo from '../images/sstinfologo.jpg';
import latestoffers from '../images/latestoffers.gif';

function SstInfohome() {
  return (
    <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
      <u>
        <h2 className="text-2xl pl-2">
          <i className="fa fa-handshake-o" aria-hidden="true"></i> Welcome
        </h2>
      </u>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 pl-5">
        <div className="mt-10 col-span-1 md:col-span-2 lg:col-span-2">
          <img src={sstinfologo} alt="Logo" className="w-3/4 md:w-1/2 lg:w-1/2 h-auto" />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <p className="font-sans text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-4">
  SHRI SATYA TECHNOLOGIES is an INDIA based web designing company where we believe in bringing client projects to life through our versatile IT services by integrating them with next generation web technology, having superior functional efficiency. In the modern era of technology, there are millions of people accessing the internet every day; therefore it is very important for you to have a website that provides a platform to your products and services. You might be doing well with your business strategies, but if your enterprise has a presence in web world than it will able to stand to its optimum potentials. We deliver versatile IT solutions to our clients after having detailed studied about their nature of the requirement.
</p>

        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 pr-4">
          {/* <img src={latestoffers} alt="Latest Offers" className="w-full h-auto rounded-lg shadow-md" /> */}
          
          <div className="relative mt-4 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-lg font-semibold p-4">
              Latest Offers
            </div>
            <marquee
              className="h-48 overflow-hidden text-gray-800"
              scrollamount="3"
              direction="up"
              loop="true"
            >
              <div className="space-y-4 p-4">
                <div className="flex items-start space-x-2">
                  <i className="fa fa-arrow-right text-lg" aria-hidden="true"></i>
                  <span>
                    <strong>Gurukul-pro Basic Module Cost:</strong> INR 5000/- <br />
                    <strong>Complete ERP (Without SMS) Cost:</strong> INR 10000/- <br />
                    <strong>Complete ERP (With SMS) Cost:</strong> INR 12500/- + SMS cost Extra
                  </span>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex items-start space-x-2">
                  <i className="fa fa-arrow-right text-lg" aria-hidden="true"></i>
                  <span>
                    <strong>Gurukul-Online Economic Cost:</strong> INR 5000/- <br />
                    <strong>Deluxe Cost:</strong> INR 10000/- <br />
                    <strong>Expert Cost:</strong> INR 15000/-
                  </span>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex items-start space-x-2">
                  <i className="fa fa-arrow-right text-lg" aria-hidden="true"></i>
                  <span>
                    <strong>Clinic-Pro Product:</strong> Clinic-pro Cost: INR 10000/-
                  </span>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SstInfohome;

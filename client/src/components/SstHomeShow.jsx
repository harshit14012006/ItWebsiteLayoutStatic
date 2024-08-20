import React from 'react';
import { Helmet } from 'react-helmet';

function SstHomeShow() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Shri Satya Technologies offers catchy and proficient website designs for corporate, business, social, and other organizations." />
        <meta name="keywords" content="Shri Satya Technologies, website design, corporate, business, social organizations, data management, cybersecurity solutions" />
        <meta name="author" content="Shri Satya Technologies" />
        <title>Shri Satya Technologies</title>
      </Helmet>
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="my-4 text-3xl font-light text-red-600">Building Tomorrow's Tech, Todays.</h2>
          <hr className="w-48 h-1 mx-auto my-4 bg-red-600 border-0 rounded" />
          <p className="text-base leading-relaxed">
            At <strong className="font-semibold">Shri Satya Technologies</strong>, we have a team of experts to offer catchy and proficient website designs for any corporate, business, social, and other organizations.
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
    </div>
  );
}

export default SstHomeShow;

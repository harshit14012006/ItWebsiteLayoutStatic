import React from 'react';
import online from '../images/online.webp';
import './SstOnlineAdvertisement.css';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function SstOnlineAdvertisement() {
  return (
    <div>
      <NavbarMain />
      <body className='backimg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto'>
          <img
            src={online}
            className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto'
            alt='#'
          />
          <div className='pt-10'>
            <u>
              <h2 className='text-2xl font-semibold'>
                Online Advertisement (SEO & SMO).
              </h2>
            </u>
            <p className='pr-4 mr-24 text-sm md:text-base'>
              Today, in the modern era of any marketing campaign is incomplete
              without a website supporting the campaign and adding interactivity
              to your advertisements. Internet marketing is the fastest growing
              way to reach larger customers rather than any traditional way of
              ad. Online advertising, also called Internet advertising,
              uses the Internet to deliver promotional marketing messages to
              consumers.
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-normal font-bold leading-tight mx-20"><b>Advantages Of Search Engine Optimization</b></h1>
            <hr className="border-black mx-20" />
            <div className='pl-7'>
                <ul className='mx-20 listex'>
                    <li>Search Engine Optimization</li>
                    <li>Social Media Optimization</li>
                    <li>Pay Per Click</li>
                    <li>Customer Oriented</li>
                    <li>Brand Oriented</li>
                    <li>Millions of Customers</li>
                    <li>Versatile</li>
                    <li>Strong web presence</li></ul><br/>

            </div>
      </body>
<br/>
      <div className='flex flex-wrap justify-center max-w-7xl mx-auto'>
        <div className='w-full lg:w-1/2 px-4 py-4'>
          <div className='bg-white py-4 px-8 rounded-lg shadow-lg'>
            <span style={{ color: 'blue' }}>
              {' '}
              <i className='fa fa-rectangle-ad'></i>{' '}
            </span>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Search Engine Optimization.
            </h5>
            <p className='mb-3 text-base text-gray-500 dark:text-gray-400'>
              Search engine optimization (SEO) is a critical digital marketing
              strategy focused on enhancing a website's visibility on search
              engine results pages (SERPs). By optimizing various elements of a
              website, such as content, keywords, meta tags, and backlinks, SEO
              aims to improve the site's ranking for relevant search queries.
            </p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 px-4 py-4'>
          <div className='bg-white py-4 px-8 rounded-lg shadow-lg'>
            <span style={{ color: 'blue' }}>
              {' '}
              <i className='fa fa-server'></i>{' '}
            </span>
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Social Media Optimization
            </h5>
            <p className='mb-3 text-base text-gray-500 dark:text-gray-400'>
              Social Media Optimization (SMO) is a strategic approach to
              enhancing a brand's online presence through the use of social media
              platforms. By creating and sharing engaging, relevant content,
              businesses can increase their visibility, attract a broader
              audience, and foster deeper connections with their customers.
            </p>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
}

export default SstOnlineAdvertisement;

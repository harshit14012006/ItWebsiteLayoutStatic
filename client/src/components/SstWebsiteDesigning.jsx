import React from 'react'
import webdevpic from '../images/webdevpic.jpg';
import './SstWebsiteDesigning.css';
import NavbarMain from './NavbarMain';
import staticwebimg from '../images/staticwebimg.jpg'
import flashwebimg from '../images/flashwebimg.jpg'
import dynamicwebimg from '../images/dynamicwebimg.jpg'
import FooterMain from './FooterMain';
function SstWebsiteDesigning() {
  return (
    <div>
        <NavbarMain />
      <body className='backimg'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4'>
          <img src={webdevpic} className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto' alt='#' />
          <div className='pt-10'>
            <u><h2 className='text-2xl font-semibold'>Website Designing</h2></u>
            <p className='pr-4 mt-4 text-sm md:text-base'>
            Website is the face of your company that can be read through all over the world, we do that exactly. May be you are professional or own a small business or want a corporate website, we have each and every solution for you and obviously within the budget that you can't imagine off.
            </p>
          </div>
        </div>
        <p className='px-4 mt-4 text-sm md:text-base max-w-7xl mx-auto'>
        Responsive design is another crucial aspect of modern website design, ensuring that the site looks and functions seamlessly across various devices, from desktops to smartphones and tablets. This adaptability not only enhances user experience but also boosts search engine rankings, as search engines prioritize mobile-friendly websites.
        </p>
        <p className='px-4 mt-4 text-sm md:text-base max-w-7xl mx-auto'>
        User experience (UX) design principles play a pivotal role in website design, focusing on creating journeys that guide users towards their goals effortlessly.
        </p>
        <p className='px-4 mt-4 text-sm md:text-base max-w-7xl mx-auto'>
        This involves creating clear call-to-actions, intuitive navigation paths, and strategically placing content to prioritize important information.
        </p>
        <p className='px-4 mt-4 text-sm md:text-base max-w-7xl mx-auto'>
        Furthermore, accessibility considerations ensure that the website is usable by people with disabilities, such as those using screen readers or navigating with keyboard-only controls
        </p>
        <p className='px-4 mt-4 text-sm md:text-base max-w-7xl mx-auto'>
        Compliance with web standards and best practices ensures that the website is secure, performs well, and is compatible with different browsers.
        </p>
      </body>
<br/>
<div className="grid grid-cols-1 pl-4 md:grid-cols-3 gap-6">
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" style={{width:"100%"}} src={staticwebimg} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Static Website Designing</h5>
      </a>
      <p className="mb-3 text-gray-700 dark:text-gray-400">A static website is nothing but the simple web pages defining your business strategies on internet. A static website is the simplest way to show your product or business online. It is the easiest type of website to set up. Static web design is best suited for those who will not require updates often.</p>
      <a href="/staticwebpage" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" style={{width:"100%"}} src={flashwebimg} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Flash Website Designing</h5>
      </a>
      <p className="mb-3 text-gray-700 dark:text-gray-400">Flash increase the attentiveness of viewers in your website. Flash is the option to make your website more attractive, expressive and interested for viewers of your website. It's very helpful in increasing traffic on your website. By using interactive features ranging from feedback forms to games and movies.</p>
      <a href="/flashwebpage" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" style={{width:"100%"}} src={dynamicwebimg} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Dyanamic Website Desiging.</h5>
      </a>
      <p className="mb-3 text-gray-700 dark:text-gray-400">Today's market scenario requires every business to possess a solid web presence in order to attract visitors. Simply having a website is not enough; you need to update it in line with the changes that are taking place in your business to ensure that the latest information is conveyed.</p>
      <a href="/dynamicwebpage" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
</div>
<FooterMain/>
    </div>
  )
}

export default SstWebsiteDesigning
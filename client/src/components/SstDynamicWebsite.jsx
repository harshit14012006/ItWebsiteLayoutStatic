import React from 'react'
import dynamicwebbanner from '../images/dynamicwebbanner.jpg';
import './SstDynamicWebsite.css';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';
function SstDynamicWebsite() {
  return (
    <div>
        <NavbarMain />
      <body className='backimg'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4'>
          <img src={dynamicwebbanner} className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto' alt='#' />
          <div className='pt-10'>
            <u><h2 className='text-2xl font-semibold'>Dynamic Website Designing</h2></u>
            <p className='pr-4 mt-4 text-sm md:text-base'>
            Today's market scenario requires every business to possess a solid web presence in order to attract visitors. Simply having a website is not enough; you need to update it in line with the changes that are taking place in your business to ensure that the latest information is conveyed to your prospective and existing customers.
            <p>A dynamic web page is a page that changes according to the user. With the help of a connected database it gives response to the user's need and provides exact information to the user. A static website is good for small businesses dealing with relatively simple products and services that can be promoted without high level of interactivity. However, if your business requires you to maintain stuff like catalogues, albums or complex data series online and in turn ensure high interactivity, a dynamic website is exactly what you need. We offer you dynamic website design that helps you derive long term benefits at economical rates.
            We interact with no. of dynamic websites in our daily life like tradus.in, ebay, naaptol.com etc.</p>
            </p>
          </div>
        </div>
        <br/>
      </body>
      <br/>
      <div className='pl-10'>
      <u>  <h2 className='text-2xl font-semibold'>Advantage of Dynamic Website Designing</h2> </u>
      <ul class="list-disc pl-6 pr-10 pt-2">
  <li class="mb-2">Quick to develop.</li>
  <li class="mb-2">Cheaper to develop as compared to dynamic website</li>
  <li class="mb-2">Ideal for small business.</li>
  <li class="mb-2">Easier for search engines to index</li>
  <li class="mb-2">Quicker to download (images, brochures etc.) on slow connections.</li>
  <li class="mb-2">Easy to change the layout of web page when desired.</li>
  <li class="mb-2">Direct control over content.</li>
  <li class="mb-2">SEO friendly.</li>
  We are developing simple, innovative and informative website with an attractive look and feel or both, in most affordable and cheapest prices.
</ul>
</div>
      <br/>  
<div className='pl-10'>
      <u>  <h2 className='text-2xl font-semibold'>Get Dynamic Website in Just Rs. 3000</h2> </u>
      <ul class="list-disc pl-6 pr-10 pt-2">
  <li class="mb-2">Easy to maintain.</li>
  <li class="mb-2">Easy to update.</li>
  <li class="mb-2">Manage files such as photos and documents</li>
  <li class="mb-2">
  Manage users of your website and decide who may access which pages and files at what time.</li>
  <li class="mb-2">Maintain records.</li>
  <li class="mb-2">Create your own Color Schemes (you can define predefined color for website).</li>
  <li class="mb-2">It's much easier to provide customized sales information like quotes, calculations, discounts, etc to the customer.</li>
  <li class="mb-2">Dynamic sites are database oriented and allow for easy modification of content, videos or images without depending on the webmaster.</li>
  <li class="mb-2">Dynamic web design offers high flexibility, both for the site owner and the visitor.</li>
  <li class="mb-2">Such websites are built with advanced technology that allow for easy crawling by search engine spiders.</li>
</ul>
</div>
      <br/>
      <div className='pl-10'>
      <u>  <h2 className='text-2xl font-semibold'>Additional</h2> </u>
      <ul class="list-disc pl-6 pr-10 pt-2">
  <li class="mb-2">Contact us form with auto respond email (if required) Price at: Rs 700</li>
  <li class="mb-2">Attractive Java script dropdown menu (if required) Price at: Rs 500
  </li>
  <li class="mb-2">Meta tags development like title tag and description tags, Alt tags on all images (if required). Price at: Rs 500 per page
  </li>
</ul>
</div>
      <br/>
<div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Note</span>
    <span class="font-semibold mr-2 text-left flex-auto">The price of dynamic website is depend on the requirement. The range of dynamic website is starts from Rs. 15,000.</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
      <br/>
      <FooterMain/>
    </div>
  )
}

export default SstDynamicWebsite
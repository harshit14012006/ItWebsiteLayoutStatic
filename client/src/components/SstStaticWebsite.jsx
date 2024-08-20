import React from 'react'
import webdevpic from '../images/webdevpic.jpg';
import './SstStaticWebsite.css';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';
function SstStaticWebsite() {
  return (
    <div>
        <NavbarMain />
      <body className='backimg'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4'>
          <img src={webdevpic} className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto' alt='#' />
          <div className='pt-10'>
            <u><h2 className='text-2xl font-semibold'> Static Website Designing</h2></u>
            <p className='pr-4 mt-4 text-sm md:text-base'>
            A static website is nothing but the simple web pages defining your business strategies on internet. A static website is the simplest way to show your product or business online. It is the easiest type of website to set up. Static web design is best suited for those who will not require updates often.
            </p>
            <p>
            Static website is also termed as Small Business Website and Brochure Websites and usually service with an online demonstration thus enabling us to persuade the prospective customers to purchase our products or services. This type of website is suitable for those who need to constitute their web presence or just use it as a basis of intermediation to establish contact with the clients.
            Our static web designing services starts with understanding the clients requirement, analyzing and designing the appropriate layout which translates your business logic into the desired application. A static website is quite suitable where updating the products or services is not required. Static web designs are ideal for downloading images, brochures etc. Static websites are easy to navigate..
            </p>
          </div>
        </div>
        </body>
        <br/>
        <div className='pl-10'>
      <u>  <h2 className='text-2xl font-semibold'>Advantage of Static Website Designing</h2> </u>
      <ul class="list-disc pl-6 pr-10 pt-2">
  <li class="mb-2">Quick to develop.</li>
  <li class="mb-2">Cheaper to develop as compared to dynamic website.</li>
  <li class="mb-2">Ideal for small business.</li>
  <li class="mb-2">Easier for search engines to index.</li>
  <li class="mb-2">Quicker to download (images, brochures etc.) on slow connections</li>
  <li class="mb-2">Easy to change the layout of web page when desired</li>
  <li class="mb-2">Direct control over content</li>
  <li class="mb-2">SEO friendly</li>
  We are developing simple, innovative and informative website with an attractive look and feel or both, in most affordable and cheapest prices.
</ul>
</div>
<br/>
<div className='pl-10'>
      <u>  <h2 className='text-2xl font-semibold'>Get Static Website in Just Rs. 3000</h2> </u>
      <ul class="list-disc pl-6 pr-10 pt-2">
      <li class="mb-2">Customized template designs 3 samples to choose from.</li>
  <li class="mb-2">Modifications and changes up to 3 revisions.</li>
  <li class="mb-2">Files provided for your future changes and modifications are Photoshop 7 image file with all the layers, actual HTML file using Dreamweaver MX and all the fonts used in your website template.</li>
  <li class="mb-2">4 pages development of your website.</li>
  <li class="mb-2">Above 4 pages per page price is at Rs. 700.</li>
  <li class="mb-2">Free maintenance up to 3 months - This maintenance covers all changes which are less than 4 man hours and includes any modifications changes in the design or content changes on any of the existing pages.</li>
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
    <span class="font-semibold mr-2 text-left flex-auto">Depending on the selection of template and additional modification of your choice price of the flash website can be more than of its basic price.</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>

</div>
      <br/>
      <FooterMain/>
    </div>
  )
}

export default SstStaticWebsite
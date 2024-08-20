import React from 'react'
import statics from '../images/SFD.jpg'
import NavbarMain from './NavbarMain'
import FooterMain from './FooterMain'
function StaticWebsite() {
    return (
        <div>
            <NavbarMain/>
        <div className='container my-10'>
            <center><img src={statics} alt='' /></center><br />
            <h1 className="mx-40 text-2xl font-normal font-bold leading-tight"><b>STATIC WEBSITE DESIGNING</b></h1>
            <hr className="mx-40 border-black" />
            <p className='mx-40 my-6'>
                A static website is nothing but the simple web pages defining your business strategies on internet. A static website is the simplest way to show your product or business online. It is the easiest type of website to set up. Static web design is best suited for those who will not require updates often.
                Static website is also termed as Small Business Website and Brochure Websites and usually service with an online demonstration thus enabling us to persuade the prospective customers to purchase our products or services. This type of website is suitable for those who need to constitute their web presence or just use it as a basis of intermediation to establish contact with the clients.
                Our static web designing services starts with understanding the clients requirement, analyzing and designing the appropriate layout which translates your business logic into the desired application. A static website is quite suitable where updating the products or services is not required. Static web designs are ideal for downloading images, brochures etc. Static websites are easy to navigate.
            </p>
            <h1 className="mx-40 text-2xl font-normal font-bold leading-tight"><b>Advantage of Static Website Designing</b>
            </h1><hr className="mx-40 border-black" />
            <div className='pl-7'>
            <ul className='mx-40'>
                <li>Quick to develop.</li>
                <li>Cheaper to develop as compared to dynamic website</li>
                <li>Ideal for small business</li>
                <li>Easier for search engines to index</li>
                <li>Quicker to download (images, brochures etc.) on slow connections</li>
                <li>Easy to change the layout of web page when desired</li>
                <li>Direct control over content</li>
                <li>SEO friendly</li>
            </ul>
            </div>
            <p className='mx-40 mt-4'>We are developing simple, innovative and informative website with an attractive look and feel or both, in most affordable and cheapest prices.</p><br />
            <h1 className="mx-40 text-2xl font-normal font-bold leading-tight"><b>Get Static Website in Just Rs. 3000</b></h1><hr className="mx-40 border-black" />
            <div className='pl-7'>
            <ul className='mx-40'>
                <li>Customized template designs 3 samples to choose from.</li>
                <li>Modifications and changes up to 3 revisions.</li>
                <li>Files provided for your future changes and modifications are Photoshop 7 image file with all the layers, actual HTML file using Dreamweaver MX and all the fonts used in your website template.</li>
                <li>4 pages development of your website.</li>
                <li>Above 4 pages per page price is at Rs. 700.</li>
                <li>Free maintenance up to 3 months - This maintenance covers all changes which are less than 4 man hours and includes any modifications changes in the design or content changes on any of the existing pages.</li>
            </ul>
            </div><br />

            <h1 className="mx-40 text-2xl font-normal font-bold leading-tight"><b>Additional</b></h1><hr className="mx-40 border-black" />
            <div className='pl-7'>
            <ul className='mx-40'>
                <li>Contact us form with auto respond email (if required) Price at: Rs 700</li>
                <li>Attractive Java script dropdown menu (if required) Price at: Rs 500</li>
                <li>Meta tags development like title tag and description tags, Alt tags on all images (if required). Price at: Rs 500 per page</li>
            </ul>
            </div><br />

            <br /><br />

            <div class="max-w-md mx-auto bg-blue-100 border border-gray-400 rounded-lg shadow-md p-6 mb-4 hover:border-blue-500 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                <h3 class="text-lg font-bold mb-2 text-gray-900">Note:</h3><hr className="border-black"/>
                <p class="text-gray-700">Depending on the selection of template and additional modification of your choice price of the static website can be more than of its basic price.</p>
            </div>
</div>
<FooterMain/>
        </div>
    )
}

export default StaticWebsite

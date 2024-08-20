import React from 'react'
import web from '../images/webdesin.jpg';
import webDev from '../images/webDev.jpg';
import NavbarMain from './NavbarMain';
import SatyaFooter from './SatyaFooter';

function WebsiteDevelopment() {
    return (
        <div>
            <NavbarMain/>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center my-6 md:my-10 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="md:w-1/2">
                        <div className="flex items-center space-x-4">
                            <img src={web} className="w-12 h-12 object-cover rounded-full" alt="Web Design" />
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">WEBSITE DEVELOPMENT</h2>
                        </div>
                        <p className="text-base md:text-lg mt-4">
                            <hr className="border-t-4 border-black my-4" />
                            Many people use the two terms "web design" and "web development" interchangeably, but they really do have two different meanings. If you're looking for a new job or someone to build your website, you need to know the difference.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src={webDev} alt='Website Design' className="w-full h-auto object-cover" />
                    </div>
                </div>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mx-0 md:mx-4 lg:mx-40 mb-4">WEB DESIGNING</h1>
                <hr className="border-black mx-0 md:mx-4 lg:mx-40 mb-6" />
                <p className='text-base md:text-lg mx-0 md:mx-4 lg:mx-40 mb-6'>
                    Web design is the customer-facing part of the website. A web designer is concerned with how a site looks and how the customers interact with it. Good web designers know how to put together the principles of design to create a site that looks great. They also understand about usability and how to create a site that customers want to navigate around in because it's so easy to do.
                </p>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mx-0 md:mx-4 lg:mx-40 mb-4">WEB DEVELOPMENT</h1>
                <hr className="border-black mx-0 md:mx-4 lg:mx-40 mb-6" />
                <p className='text-base md:text-lg mx-0 md:mx-4 lg:mx-40 mb-6'>
                    Web development is the back-end of the website, the programming and interactions on the pages. A web developer focuses on how a site works and how the customers get things done on it. Good web developers know how to program CGI and scripts like PHP. They understand about how web forms work and can keep a site running effectively.
                    <br />At Shri Satya Technologies, we provide back-end of the website, the programming and interactions on the pages. Our web developer focuses on how a site works and how easily the customers get things done on it.
                </p>
            </div>
            <SatyaFooter/>
        </div>
    )
}

export default WebsiteDevelopment

import React from 'react'
import web from './images/web2.jpg'
import statics from './images/static.jpg';
import dynamic from './images/dynamic1.jpg'
import flash from './images/flash.webp'
function WebDevelopment() {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center m-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-normal font-bold leading-tight">WEB DESIGNING</h2>
            <p className="text-lg"><hr className="border-t-4 border-black my-4" />
              Website is the face of your company that can be read through all over the world, we do that exactly. May be you are professional or own a small business or want a corporate website, we have each and every solution for you and obviously within the budget that you can't imagine off.
            </p>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="md:w-1/2">
            <img className="w-full h-auto" src={web} alt='Website Design' />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-20 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full" src={statics} alt="Static Web Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Static Web Designing</div>
              <hr className='border-black' />
              <p className="text-gray-700 text-base">
                A static website is nothing but the simple web pages defining your business strategies on internet.
              </p>
              <div className="text-center mt-4">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full h-1/2" src={flash} alt="Flash Web Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Flash Web Designing</div><hr className='border-black' />
              <p className="text-gray-700 text-base">
                Flash is the option to make your website more attractive, expressive and interested for viewers of your website.
              </p>
              <div className="text-center mt-4">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500 border border-transparent">
            <img className="w-full h-1/2" src={dynamic} alt="Dynamic Web Designing" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-center mb-2">Dynamic Web Designing</div><hr className='border-black' />
              <p className="text-gray-700 text-base">
                Today's market scenario requires every business to possess a solid web presence in order to attract visitors.
              </p>
              <div className="text-center mt-4">
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment
import React from 'react'
import logoDesign from '../images/logo.jpg';
import './SstLogoDesigning.css';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';
import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.jpg'
import logo4 from '../images/logo4.jpg'
import logo5 from '../images/logo5.jpg'
import logo6 from '../images/logo6.jpg'
import logo7 from '../images/logo7.jpg'
import logo8 from '../images/logo8.jpg'
import logo9 from '../images/logo9.jpg'
function SstLogoDesigning() {
  return (
    <div >
        <NavbarMain/>
        <body className='backimg'>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-7xl'>
    <img src={logoDesign} className='pt-10 pb-10 pl-10 rounded-md w-full md:w-4/5 mx-auto' alt='#' />
    <div className='pt-10'>
      <u><h2 className='text-2xl font-semibold'>Logo Designing</h2></u>
      <p className='pr-4 mt-4 mr-24 text-sm md:text-base'>
        "A logo is not just entertainment or an art form, but a medium of information."
        <br />
        Before designing a logo, it's crucial to understand its purpose: branding and identification. A logo identifies a product or company through a symbol, mark, flag, or signature. It doesn't need to explain business practices but should symbolize the quality of the business it represents.
      </p>
    </div>
  </div>
  <p className='px-4 mt-4 mx-20 text-sm md:text-base max-w-7xl mx-auto'>
    It's important for your logo to become recognizable over time. Once viewers subconsciously connect your logo with your company and its goals, it will successfully represent your brand.
  </p>
  <h1 className="text-2xl font-normal mt-5 font-bold leading-tight mx-20"><b>Advantages Of Our Logo Designing</b></h1>
            <hr className="border-black mx-20" />
            <div className='pl-7'>
                <ul className='mx-20 listex'>
                    <li>Brand Oriented</li>
                    <li >Business Oriented</li>
                    <li>Versatile</li>
                    <li>Magnificent</li>
                    <li>Professional</li>
                </ul>
            </div>
            <p className='mx-20 my-4'>
                And here we design the logo that summarizes your business ideas without any brainstorming.
            </p><br />
</body>

        <br/>
        <div className="overflow-hidden bg-gray-200">
           <u> <h2 className='text-2xl font-serif font-semibold text-center'>And here we design the logo that summarizes your business ideas without any brainstorming.</h2></u>
            <br/>
      <div className="flex">
        <div className="marquee-container">
          <img src={logo1} alt="Photo 1" className="marquee-item" />
          <img src={logo2} alt="Photo 2" className="marquee-item" />
          <img src={logo3} alt="Photo 3" className="marquee-item" />
          <img src={logo4} alt="Photo 4" className="marquee-item" />
          <img src={logo5} alt="Photo 5" className="marquee-item" />
          <img src={logo6} alt="Photo 6" className="marquee-item" />
          <img src={logo7} alt="Photo 7" className="marquee-item" />
          <img src={logo8} alt="Photo 8" className="marquee-item" />
          <img src={logo9} alt="Photo 9" className="marquee-item" />
        </div>
      </div>
    </div>
    <FooterMain/>
</div>
    
  )
}

export default SstLogoDesigning
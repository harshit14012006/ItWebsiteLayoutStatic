import React from 'react';
import single from '../images/singleWeb.png';
import FooterMain from './FooterMain';
import NavbarMain from './NavbarMain';

function SingleWebsite() {
  return (
    <div>
      <NavbarMain />
      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img
            src={single}
            alt="Single Page Design"
            className="object-contain w-full h-auto rounded-lg shadow-md sm:w-3/4 lg:w-1/2"
          />
        </div>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            SINGLE PAGE DESIGNING
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          Single page design is a web design approach where all the content is
          contained within a single, scrollable page. This design method is ideal
          for creating seamless, continuous user experiences, as it eliminates
          the need for multiple page loads. It often employs techniques like
          parallax scrolling, dynamic loading, and smooth transitions to enhance
          interactivity and engagement. Single page websites are particularly
          effective for portfolios, product presentations, and landing pages where
          a linear storytelling format can be beneficial. By focusing on a
          streamlined and focused layout, single page design helps keep users'
          attention and guides them through the content in a controlled and
          intuitive manner.
        </p>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            Advantage of Single Page Designing
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <div className="pl-4 mb-8 sm:pl-6 lg:pl-8">
          <ul className="text-base leading-relaxed list-disc sm:text-lg">
            <li className="mb-2">Enhanced User Experience</li>
            <li className="mb-2">Faster Navigation</li>
            <li className="mb-2">Improved Mobile Compatibility</li>
            <li className="mb-2">Increased Conversion Rates</li>
            <li className="mb-2">Easier Maintenance</li>
            <li className="mb-2">SEO Benefits</li>
            <li className="mb-2">Simplified User Flow</li>
            <li className="mb-2">Reduced Development Time</li>
          </ul>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default SingleWebsite;

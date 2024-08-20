import React from 'react';
import statics from '../images/responsiveWeb.png';
import NavbarMain from './NavbarMain';
import FooterMain from './FooterMain';

function ResponsiveWebsite() {
  return (
    <div>
      <NavbarMain />
      <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img
            src={statics}
            alt="Responsive Website Design"
            className="object-contain w-full h-auto rounded-lg shadow-md sm:w-3/4 lg:w-1/2"
          />
        </div>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            RESPONSIVE WEBSITE DESIGNING
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          In today's digital age, the diversity of devices used to access the
          internet is vast. From desktops and laptops to tablets and smartphones,
          users expect a seamless and intuitive experience regardless of the
          device they use. Responsive web design is the solution that bridges
          this gap, ensuring that websites are accessible, user-friendly, and
          visually appealing on all devices. This approach not only enhances
          user satisfaction but also boosts engagement and retention, making it
          an essential practice for modern web development.
        </p>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            Advantage of Responsive Website Designing
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <div className="pl-4 mb-8 sm:pl-6 lg:pl-8">
          <ul className="text-base leading-relaxed list-disc sm:text-lg">
            <li className="mb-2">Enhanced User Experience</li>
            <li className="mb-2">Increased Mobile Traffic</li>
            <li className="mb-2">Improved SEO Performance</li>
            <li className="mb-2">Cost Efficiency</li>
            <li className="mb-2">Easier Maintenance</li>
            <li className="mb-2">Faster Page Load Times</li>
            <li className="mb-2">Higher Conversion Rates</li>
            <li className="mb-2">Future-Proofing</li>
            <li className="mb-2">Better Analytics and Reporting</li>
            <li className="mb-2">Improved Brand Perception</li>
          </ul>
        </div>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          We are developing simple, innovative and informative websites with an
          attractive look and feel, in the most affordable and competitive
          prices.
        </p>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            The Role of User Experience (UX) in Responsive Web Design
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <p className="mb-8 text-base leading-relaxed sm:text-lg">
          User experience (UX) plays a pivotal role in responsive web design by
          ensuring that a website is not only visually appealing but also
          functional and easy to navigate across various devices. A strong UX
          strategy starts with understanding the needs and behaviors of users
          on different devices, which helps in creating a layout that is
          intuitive and user-friendly. This involves designing clear and
          accessible navigation menus, optimizing touch interactions for mobile
          users, and ensuring that content is easily readable regardless of
          screen size. Additionally, incorporating feedback loops and
          conducting usability testing are crucial for identifying potential
          issues and making necessary adjustments. By prioritizing UX in
          responsive design, websites can enhance user satisfaction, foster
          engagement, and drive conversions, ultimately contributing to the
          overall success of the online presence.
        </p>
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">
            Best Practices for Responsive Web Design
          </h1>
          <hr className="w-1/2 mx-auto border-black" />
        </div>
        <div className="pl-4 mb-8 sm:pl-6 lg:pl-8">
          <ul className="text-base leading-relaxed list-disc sm:text-lg">
            <li className="mb-2">Mobile-First Approach</li>
            <li className="mb-2">Flexible Grid Layouts</li>
            <li className="mb-2">Media Queries</li>
            <li className="mb-2">Responsive Images</li>
            <li className="mb-2">Consistent Navigation</li>
            <li className="mb-2">Testing Across Devices</li>
            <li className="mb-2">Optimize Performance</li>
          </ul>
        </div>
      </div>
      <FooterMain />
    </div>
  );
}

export default ResponsiveWebsite;

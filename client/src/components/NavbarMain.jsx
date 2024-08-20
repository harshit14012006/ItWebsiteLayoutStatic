import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavbarMain() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevelopmentDropdownOpen, setIsDevelopmentDropdownOpen] =
    useState(false);
  const [isMarketingDropdownOpen, setIsMarketingDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsDevelopmentDropdownOpen(!isDevelopmentDropdownOpen);
    if (isMarketingDropdownOpen) {
      setIsMarketingDropdownOpen(false);
    }
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const toggleMarketingDropdown = () => {
    setIsMarketingDropdownOpen(!isMarketingDropdownOpen);
    if (isDevelopmentDropdownOpen) {
      setIsDevelopmentDropdownOpen(false);
    }
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const toggleNewServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    if (isDevelopmentDropdownOpen) {
      setIsDevelopmentDropdownOpen(false);
    }
    if (isMarketingDropdownOpen) {
      setIsMarketingDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsDevelopmentDropdownOpen(false);
      setIsMarketingDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <nav className="bg-gray-800 bg-center bg-cover ">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <Link to="/" aria-label="Home">
                  <div className="flex items-center space-x-2">
                    {/* Logo Text */}
                    <span className="text-2xl font-semibold text-white">
                      <span className="text-blue-500">Byte</span>Vision{" "}
                      <span className="text-gray-300">Technologies</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="relative px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    to="/aboutus"
                    className="relative px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500"
                  >
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>

                  {/* Development Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleServicesDropdown}
                      className="relative flex items-center px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500 group"
                    >
                      Development
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                          isDevelopmentDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 9l-7.5 7.5L4.5 9"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isDevelopmentDropdownOpen && (
                      <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/web-development-designing"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Web Development
                          </Link>
                          <Link
                            to="/software-development"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Software Development
                          </Link>
                          <Link
                            to="/e-commerce"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            E-Commerce App
                          </Link>
                          <Link
                            to="/mobile-app"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Mobile App Development
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Marketing Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleMarketingDropdown}
                      className="relative flex items-center px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500 group"
                    >
                      Marketing
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                          isMarketingDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 9l-7.5 7.5L4.5 9"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isMarketingDropdownOpen && (
                      <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/digital-marketing"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            to="/voice-calls"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Voice Calls
                          </Link>
                          <Link
                            to="/whatsapp-messages"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Whatsapp Messagaes
                          </Link>
                          <Link
                            to="/whatsapp-apis"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Whatsapp Apis
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleNewServicesDropdown}
                      className="relative flex items-center px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500 group"
                    >
                      Services
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                          isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 9l-7.5 7.5L4.5 9"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            to="/maintenance"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Maintenance Services
                          </Link>
                          <Link
                            to="/logo-designing"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Logo Desiging
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Career link */}
                  <Link
                    to="/career"
                    className="relative px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500 group"
                  >
                    Career
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  {/* Contact link */}
                  <Link
                    to="/contact-us"
                    className="relative px-3 py-2 text-sm font-medium text-white rounded-md hover:text-blue-500 group"
                  >
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
            >
              About Us
            </Link>

            {/* Mobile Dropdown for Development */}
            <div className="relative">
              <button
                onClick={toggleServicesDropdown}
                className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
              >
                Development
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    isDevelopmentDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9l-7.5 7.5L4.5 9"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              {isDevelopmentDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/web-development-designing"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/software-development"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Software Development
                    </Link>
                    <Link
                      to="/e-commerce"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      E-Commerce App
                    </Link>
                    <Link
                      to="/mobile-app"
                      className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Mobile App Development
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Dropdown for Marketing */}
            <div className="relative">
              <button
                onClick={toggleMarketingDropdown}
                className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
              >
                Marketing
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    isMarketingDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9l-7.5 7.5L4.5 9"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              {isMarketingDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/digital-marketing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/voice-calls"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Voice Calls
                    </Link>
                    <Link
                      to="/whatsapp-messages"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      WhatsApp Messages
                    </Link>
                    <Link
                      to="/whatsapp-apis"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      WhatsApp APIs
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Dropdown for Services  */}
            <div className="relative">
              <button
                onClick={toggleNewServicesDropdown}
               className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
              >
                Services
                <svg
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 9l-7.5 7.5L4.5 9"
                  />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/maintenance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Maintenance
                    </Link>
                    <Link
                      to="/logo-designing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logo Designing
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* Career link */}
            <Link
              to="/career"
              className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
            >
              Career
            </Link>
            {/* Contact link */}
            <Link
              to="/contact-us"
              className="relative flex items-center px-3 py-2 text-base font-medium text-white rounded-md hover:text-blue-500 group"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarMain;

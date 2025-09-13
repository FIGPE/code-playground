import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInRange, setIsInRange] = useState(false);

  // Check if viewport is between 200px and 800px
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsInRange(width >= 200 && width <= 800);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold">
              Dashboard
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xs:flex sm:flex items-center space-x-6">
            <a
              href="/home"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              LifeCycle
            </a>
            <a
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Analytics
            </a>
            <a
              href="/services"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Teams
            </a> <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Data Library
            </a> <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Reports
            </a> <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Word Assitant
            </a>
          </div>

          {/* Hamburger Button (visible only between 200px and 800px) */}
          {isInRange && (
            <div className="flex items-center xs:hidden sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible only between 200px and 800px) */}
      {isInRange && isOpen && (
        <div className="xs:hidden sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
             Dashboard
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              LifeCycle
            </a>
            <a
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Analytics
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Projects
            </a>
             <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Teams
            </a>
             <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Data Library
            </a>
             <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Reports
            </a>
             <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Word Assitant
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
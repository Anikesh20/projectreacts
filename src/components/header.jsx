import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="flex items-center">
          <img src={logo} alt="IntoWork Logo" className="h-10" />
        </a>
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none z-50`}
        >
          <a
            href="#"
            className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0"
          >
            Home
          </a>
          {/* About Dropdown */}
          <div className="relative group">
            <button
              className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0 flex items-center"
              onClick={() => toggleDropdown('about')}
            >
              About
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`${
                activeDropdown === 'about' 
                  ? 'block'
                  : 'hidden'
              } lg:group-hover:block lg:absolute left-0 bg-white shadow-md rounded-lg`}
            >
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Our Shared Values
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Governance
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Certifications
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Corporate Publications
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Join The IntoWork Team
              </a>
            </div>
          </div>
          {/* The IntoWork Group Dropdown */}
          <div className="relative group">
            <button
              className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0 flex items-center"
              onClick={() => toggleDropdown('Intogroup')}
            >
              The IntoWork Group
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`${
                activeDropdown === 'Intogroup' 
                  ? 'block'
                  : 'hidden'
              } lg:group-hover:block lg:absolute left-0 bg-white shadow-md rounded-lg`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                About The IntoWork Group
              </a>
            </div>
          </div>
          {/* What We Do Dropdown */}
          <div className="relative group">
            <button
              className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0 flex items-center"
              onClick={() => toggleDropdown('whatWeDo')}
            >
              What We Do
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`${
                activeDropdown === 'whatWeDo' 
                  ? 'block'
                  : 'hidden'
              } lg:group-hover:block lg:absolute left-0 bg-white shadow-md rounded-lg`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Apprenticeships & Traineeships
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Community Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Education, Skills & Training
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Employment & Recruitment
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Transition & Career Advice
              </a>
            </div>
          </div>
          {/* Initiatives Dropdown */}
          <div className="relative group">
            <button
              className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0 flex items-center"
              onClick={() => toggleDropdown('Initiatives')}
            >
              Initiatives
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`${
                activeDropdown === 'Initiatives' 
                  ? 'block'
                  : 'hidden'
              } lg:group-hover:block lg:absolute left-0 bg-white shadow-md rounded-lg`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Collectives
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Inner North Community Foundation
              </a>
            </div>
          </div>
          {/* Media Hub Dropdown */}
          <div className="relative group">
            <button
              className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0 flex items-center"
              onClick={() => toggleDropdown('Cus')}
            >
              Media Hub
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`${
                activeDropdown === 'Cus' 
                  ? 'block'
                  : 'hidden'
              } lg:group-hover:block lg:absolute left-0 bg-white shadow-md rounded-lg`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Media Releases
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                In The News
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Responses Papers & Submission
              </a>
            </div>
          </div>
          <a
            href="#"
            className="block lg:inline-block text-gray-700 hover:text-blue-600 font-medium px-4 py-2 lg:py-0"
          >
            Contact Us
          </a>
        </nav>

        {/* Contact Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <p className="text-red-500 font-bold">1300 99 WORK (9675)</p>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

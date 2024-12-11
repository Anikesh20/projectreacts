import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
     
        <a href="/" className="flex items-center">
          <img src={logo} alt="IntoWork Logo" className="h-10" />
        </a>

     
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>

    
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
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
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Shared Values</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Governance</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Corporate Publications</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Join The IntoWork Team</a>
            </div>
          </div>

       
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
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
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About The IntoWork Group</a>
            </div>
          </div>

         
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
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
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Apprenticeships & Traineeships</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Community Support</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Education, Skills & Training</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Employment & Recruitment</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Transition & Career Advice</a>
            </div>
          </div>

         
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
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
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Collectives</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inner North Community Foundation</a>
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>

        
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
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
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Media Releases</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">In The News</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Response Papers & Submissions</a>
            </div>
          </div>
        </nav>

       
        <div className="flex items-center space-x-4">
          <p className="text-red-500 font-bold align-baseline">1300 99 WORK (9675)</p>
          <p className="text-red-500 font-bold">Call Us</p>
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

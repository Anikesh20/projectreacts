import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-white py-10 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="IntoWork Logo" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-gray-700">
            192 High Street Northcote, VIC 3070
            <br />
            1300 99 WORK (9675)
            <br />
            info@intowork.com.au
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-gray-800">About</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                About The IntoWork Group
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Certifications
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">Follow Us On Socials</h2>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/company/intoworkaustralia/" className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3H4.385A1.385 1.385 0 003 4.385v15.231A1.385 1.385 0 004.385 21h15.231A1.385 1.385 0 0021 19.615V4.385A1.385 1.385 0 0019.615 3zm-7.385 15.231h-3.692V9.615h3.692zm-1.846-8.308a2.154 2.154 0 110-4.308 2.154 2.154 0 010 4.308zm9.231 8.308h-3.692v-4.615c0-2.461-3.077-2.276-3.077 0v4.615h-3.692V9.615h3.692v1.385c1.539-2.833 6.154-2.308 6.154 1.615z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/intoworkaustralia/" className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495V14.708h-3.162v-3.62h3.162V8.173c0-3.128 1.91-4.832 4.699-4.832 1.339 0 2.494.099 2.827.144v3.28h-1.941c-1.525 0-1.82.725-1.82 1.788v2.343h3.639l-.475 3.62h-3.164V24h6.21c.729 0 1.325-.597 1.325-1.325V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.8 8.2 11.388.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.082-.73.082-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.833 2.805 1.303 3.49.997.107-.775.417-1.303.76-1.602-2.665-.302-5.466-1.335-5.466-5.938 0-1.313.467-2.388 1.236-3.23-.123-.303-.536-1.524.117-3.176 0 0 1.01-.324 3.3 1.23A11.38 11.38 0 0112 6.845c1.027.005 2.063.139 3.032.408 2.287-1.554 3.296-1.23 3.296-1.23.655 1.652.242 2.873.12 3.176.77.842 1.235 1.917 1.235 3.23 0 4.61-2.807 5.632-5.48 5.93.428.37.81 1.1.81 2.215 0 1.598-.015 2.887-.015 3.283 0 .32.217.694.826.576C20.565 21.795 24 17.296 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t pt-4">
        <p className="text-gray-600 text-sm">
          We acknowledge the Traditional Custodians of Country throughout
          Australia and recognise their continuing connection to lands, waters,
          and communities. We pay our respect to Aboriginal and Torres Strait
          Islander people and cultures and extend our respect to the Elders
          past and present.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

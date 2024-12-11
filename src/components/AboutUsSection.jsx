import React from 'react';
import TeamImage from '../assets/laughing.jpg';

const AboutUsSection = () => {
  return (
    <section className="relative bg-yellow-50 py-16">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-4 border-orange-500 opacity-50"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-96 h-96 rounded-full border-4 border-yellow-400 opacity-50"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img
            src={TeamImage}
            alt="Team"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-blue-900 uppercase mb-2">About Us</h3>
          <h2 className="text-4xl font-bold text-blue-900 leading-tight mb-4">
            National Presence, Local Delivery
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            IntoWork has more than 1700 staff and delivery partners in over 170
            locations nationwide. We work closely with employers, industries,
            and individuals to provide tailored solutions to meet their specific
            needs. Our commitment to local delivery ensures we understand and
            address the unique challenges and opportunities of each community we
            serve.
          </p>
          <a
            href="#"
            className="text-blue-900 font-semibold hover:underline inline-flex items-center"
          >
            Explore More <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

import React, { useState } from 'react';

import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';
import test4 from '../assets/test4.jpg';
import test5 from '../assets/test5.png';

const testimonials = [
  {
    image: test1,
    quote: "A great alternative to senior high school for students who want to simply and/or learn a trade.",
    details: "One of my sons is now a successful apprentice plumber after attending the College, and another is now attending the earlier program where students sample the different trades before selecting their desired option.",
    name: "John",
    title: "Associate Trade College North Dakota Cities",
  },
  {
    image: test2,
    quote: "This program changed the trajectory of my career!",
    details: "I learned valuable skills that helped me land a great job in my desired field. The support was fantastic.",
    name: "Sarah",
    title: "Graduate, Skilled Trades Program",
  },
  {
    image: test3,
    quote: "An excellent program for hands-on learners.",
    details: "I appreciated the practical approach and the opportunity to learn by doing. Highly recommend it.",
    name: "Michael",
    title: "Parent of Student",
  },
  {
    image: test4,
    quote: "The mentorship was incredible.",
    details: "Having industry professionals as mentors gave me an edge in understanding the trade.",
    name: "Emily",
    title: "Apprentice Graduate",
  },
  {
    image: test5,
    quote: "A pathway to success for young adults.",
    details: "This program equipped me with the confidence and skills to start my own business.",
    name: "James",
    title: "Entrepreneur and Alumni",
  },
];

const Persons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { image, quote, details, name, title } = testimonials[currentIndex];

  return (
    <>
    
      <section className="relative bg-gray-100 py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative text-center lg:text-left">
            <div className="w-32 h-32 mx-auto lg:mx-0">
              <img
                src={image}
                alt={`${name}'s profile`}
                className="rounded-full shadow-lg border-4 border-blue-500"
              />
            </div>
            <blockquote className="mt-6 text-gray-700 italic">
              “{quote}”
            </blockquote>
            <p className="mt-4 text-gray-600">{details}</p>
            <p className="mt-4 text-blue-900 font-semibold">
              {name}
              <br />
              <span className="text-sm text-gray-500">{title}</span>
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold text-blue-900 uppercase mb-2">
              Real Stories
            </h3>
            <h2 className="text-4xl font-bold text-blue-900 leading-tight mb-4">
              Hear from Our Community
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our students and alumni share their journeys of personal and
              professional growth. Discover how we make a difference together.
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg border border-gray-300 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg border border-gray-300 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

 
      <section className="relative bg-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6">
              Call us to learn more about how we can support you or your
              business to grow and prosper.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Persons;

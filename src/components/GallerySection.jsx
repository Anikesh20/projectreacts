import React from 'react';
import Item1 from '../assets/Item1.jpg';
import Item2 from '../assets/Item2.jpg';
import Item3 from '../assets/Item3.jpg';
import Item4 from '../assets/Item4.jpg';
import Item5 from '../assets/Item5.jpg';

const GallerySection = () => {
  const items = [
    { title: 'Apprenticeships & Traineeships', img: Item1 },
    { title: 'Community Support', img: Item2 },
    { title: 'Education, Skills and Training', img: Item3 },
    { title: 'Employment & Recruitment', img: Item4 },
    { title: 'Transition & Career Advice', img: Item5 },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">What We Do</h2>
        <div className="grid grid-cols-5 gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-56 rounded-none overflow-hidden shadow-md group transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="relative z-10 p-4 text-white text-center flex items-center justify-center h-full">
                <h3 className="text-lg font-bold transition duration-300 group-hover:text-yellow-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

import React from 'react';
import { motion } from 'framer-motion'; 
import Item3 from '../assets/Item3.jpg';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2 }} 
      className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between"
    >
      <div className="max-w-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Your Vibrant Future Starts Here
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          IntoWork is the leading national provider of Employment, Skills & Education, and Support services that support economic and social participation.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          ABOUT US
        </a>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }} 
        className="relative w-full max-w-md ml-6"
      >
        <img
          src={Item3}
          alt="Future starts here"
          className="w-full h-auto object-cover rounded-full shadow-lg"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }} 
          className="absolute bottom-0 right-0 bg-red-500 w-36 h-36 rounded-full transform translate-x-12 translate-y-12"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;

// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-blue-700 animate-pulse">About This Project</h1>
        <p className="text-gray-700 text-center mb-8">
          This project is a simple React application that displays information about countries
          around the world using data from the  Countries Object. It is styled with Tailwind CSS
          to ensure a modern and responsive design.
        </p>
        <div className="text-center mb-8">

        <img
        src='/images/world-map.jpg'// Use the imported image
        alt="World Map"
        className="mx-auto w-1/2 rounded-lg shadow-md mb-4"
      />
          
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Features</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-lg">
            <li className="mb-2">Displays country information such as name, population, region, and capital.</li>
            <li className="mb-2">Responsive design for various screen sizes using Tailwind CSS.</li>
            <li className="mb-2">Fetches data from the Countries Object.</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Technologies Used</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-lg">
            <li className="mb-2">React for building the user interface.</li>
            <li className="mb-2">Tailwind CSS for styling.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

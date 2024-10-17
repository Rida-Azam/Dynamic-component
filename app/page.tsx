
import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Country Explorer</h1>
      <p className="text-lg text-center mb-2">
        This assignment is submitted by <strong>Rida Azam</strong>.
      </p>
      <p className="text-md text-gray-600 mb-6">
        Explore various countries and their details by clicking on the link below.
      </p>

      {/* Styled Country Link */}
      <Link
        href="/country"
        className="bg-blue-300 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        View Countries
      </Link>

      
    </div>
  );
}

export default Home;
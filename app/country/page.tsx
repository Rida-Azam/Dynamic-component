// src/Country.js
import Link from 'next/link';

export default function Country() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-8">
        Explore Countries List
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="list-none space-y-4"> {/* Remove bullets with list-none */}
          <li>
            <Link 
              href="/country/pakistan" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Pakistan
            </Link>
          </li>
          <li>
            <Link 
              href="/country/canada" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Canada
            </Link>
          </li>
          <li>
            <Link 
              href="/country/germany" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Germany
            </Link>
          </li>
          <li>
            <Link 
              href="/country/japan" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Japan
            </Link>
          </li>
          <li>
            <Link 
              href="/country/brazil" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Brazil
            </Link>
          </li>
          <li>
            <Link 
              href="/country/australia" 
              className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-100 transition duration-300 ease-in-out"
            >
              Australia
            </Link>
          </li>
        </ul>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Click on a country name to learn more!</p>
        </div>
      </div>
    </div>
  );
}

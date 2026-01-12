import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
        <div className="bg-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="mt-8">
          <p className="text-2xl font-semibold md:text-3xl text-gray-800">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="mt-4 text-gray-500">
            It might have been moved or deleted, or you may have mistyped the URL.
          </p>
        </div>
        <div className="mt-10">
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default NotFound;

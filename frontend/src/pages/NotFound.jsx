import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-white mb-8">The page you are looking for does not exist.</p>
        
        <Link
          to="/"
          className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

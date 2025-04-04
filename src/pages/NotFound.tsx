
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5f2f8] p-6">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-[#465882] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
        <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-3 bg-[#465882] text-white rounded hover:bg-[#374569] transition-colors"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFound;

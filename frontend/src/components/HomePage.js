import React from "react";
import { Link } from "react-router-dom";
import "/Users/akshay/Desktop/internship project copy/frontend/src/styles.css"
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center font-sans">
      <div className="mx-auto max-w-2xl bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Application</h1>
        <p className="text-lg text-gray-600 mb-8">Select an option to navigate:</p>

        <div className="flex flex-col gap-4 items-center">
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              User Login
            </button>
          </Link>
          <Link to="/profile">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              User Profile
            </button>
          </Link>
          <Link to="/admin/login">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              Admin Login
            </button>
          </Link>
          <Link to="/admin/dashboard">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              Admin Dashboard
            </button>
          </Link>
          <Link to="/ask">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 w-64 rounded-md transition-colors">
              Ask a Question
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
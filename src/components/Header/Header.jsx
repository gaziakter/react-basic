import React from 'react'

const Header = () => {
  return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="flex items-center">
                <a href="#" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    MyStore
                </a>
                {/* You can replace text with an image logo */}
                {/* <img src="/path/to/your-logo.png" alt="MyStore Logo" className="h-10 w-auto" /> */}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                <button className="text-indigo-600 hover:text-indigo-800 font-semibold py-2 px-4 rounded-full transition-colors duration-200">
                    Sign In
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    Sign Up
                </button>
                </div>
            </div>
        </header>
  )
}

export default Header
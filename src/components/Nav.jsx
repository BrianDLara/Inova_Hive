import React from 'react'
const Nav = ({ mode, toggleMode }) => {
    const logo = 'https://i.imgur.com/8lqGFxZ.png'; // replace with your Imgur link

    return (
        <header className={`flex justify-between items-center p-4 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto mr-2" src={logo} alt="Inova Hive logo" />
            <h1 className="text-white font-semibold text-lg">Inova Hive</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center">
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a></li>
            </ul>
          </div>
          <button className={`px-4 py-2 rounded ${mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={toggleMode}>
        {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
    )
}

export default Nav

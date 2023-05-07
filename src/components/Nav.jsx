import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ mode, toggleMode }) => {
  const logoLight = 'https://i.imgur.com/lRg7Y1p.png';
  const logoDark = 'https://i.imgur.com/jlknZ4r.png';

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        mode === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            className="h-10 w-auto mr-2"
            src={mode === 'dark' ? logoDark : logoLight}
            alt="Inova Hive logo"
          />
          {/* <h1
            className={`font-semibold text-lg ${
              mode === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Inova Hive
          </h1> */}
        </div>
        <div className="hidden md:flex items-center justify-end">
          <ul className="flex items-center">
            <li>
              <a
                href="#"
                className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-800'
                } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-800'
                } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-800'
                } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-800'
                } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-800'
                } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button
  className={`ml-4 px-4 py-2 rounded ${
    mode === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-800'
  }`}
  onClick={toggleMode}
>
  {mode === 'dark' ? (
    <FontAwesomeIcon icon={faSun} />
  ) : (
    <FontAwesomeIcon icon={faMoon} />
  )}
</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

'use client';
import React, { useState } from 'react';

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to Open Drawer */}
      <button
        onClick={toggleDrawer}
        className='p-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600'
      >
        Open Drawer
      </button>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4 flex justify-between items-center border-b border-gray-200'>
          <h2 className='text-lg font-semibold'>Menu</h2>
          <button
            onClick={toggleDrawer}
            className='text-gray-500 hover:text-gray-700'
          >
            &times;
          </button>
        </div>
        <div className='p-4'>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded'
          >
            Home
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded'
          >
            About
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded'
          >
            Services
          </a>
          <a
            href='#'
            className='block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

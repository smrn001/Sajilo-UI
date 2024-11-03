'use client';
import React, { useState } from 'react';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    <div className=' bg-gray-100 dark:bg-gray-900 flex justify-center items-center'>
      {isVisible && (
        <div className='fixed top-20 max-w-xs w-full p-4 shadow-lg rounded-lg overflow-hidden pointer-events-auto bg-blue-500 dark:bg-gray-800 text-white'>
          <div className='flex items-center justify-between'>
            <span className='flex-1'>This is a notification message!</span>
            <button
              onClick={closeNotification}
              className='text-white hover:text-gray-200 focus:outline-none ml-4'
              aria-label='Close notification'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;

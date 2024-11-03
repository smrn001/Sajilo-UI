import React from 'react';

const notification = () => {
  return (
    <div className='min-h-screen'>
      {/* adjust the position as per personal preference fixed class to position */}
      <div className='fixed max-w-xs w-full bg-blue-500 text-white shadow-lg rounded-lg overflow-hidden pointer-events-auto'>
        <div className='flex items-center justify-between p-4'>
          <span className='flex-1'>This is a notification message!</span>
          <button className='text-white hover:text-gray-200 focus:outline-none ml-4'>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default notification;

import React, { useState } from 'react';

// Array of images from placeholder.com
const images = [
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
  'https://via.placeholder.com/400x200',
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers to navigate slides
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className='relative w-full h-[70vh] overflow-hidden bg-gray-200 dark:bg-gray-800'>
      {/* Slides */}
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className='min-w-full h-full flex-shrink-0'>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-60 dark:bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 dark:hover:bg-opacity-70 transition-all'
        aria-label='Previous Slide'
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-60 dark:bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 dark:hover:bg-opacity-70 transition-all'
        aria-label='Next Slide'
      >
        ❯
      </button>

      {/* Dots */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? 'bg-black dark:bg-white'
                : 'bg-gray-400 dark:bg-gray-500'
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

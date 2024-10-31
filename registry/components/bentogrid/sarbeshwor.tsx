import React from 'react';

const images = [
  {
    src: 'https://placehold.co/300x200',
    alt: 'Beautiful Landscape 4',
  },
  {
    src: 'https://placehold.co/300x400',
    alt: 'Beautiful Landscape 2',
  },
  {
    src: 'https://placehold.co/300x200',
    alt: 'Beautiful Landscape 3',
  },
  {
    src: 'https://placehold.co/300x400',
    alt: 'Beautiful Landscape 7',
  },

  {
    src: 'https://placehold.co/300x400',
    alt: 'Beautiful Landscape 5',
  },
  {
    src: 'https://placehold.co/300x200',
    alt: 'Beautiful Landscape 6',
  },
  {
    src: 'https://placehold.co/300x400',
    alt: 'Beautiful Landscape 8',
  },
  {
    src: 'https://placehold.co/300x200',
    alt: 'Beautiful Landscape 7',
  },
  {
    src: 'https://placehold.co/300x600',
    alt: 'Beautiful Landscape 1',
  },
  {
    src: 'https://placehold.co/300x400',
    alt: 'Beautiful Landscape 5',
  },
  {
    src: 'https://placehold.co/300x200',
    alt: 'Beautiful Landscape 6',
  },
];

const BentoGrid = () => {
  return (
    <div className='overlap-group relative w-full p-4'>
      <div className='text-wrapper text-center pt-4 font-istok-web-regular font-bold text-black dark:text-white text-2xl'>
        Bento grid{' '}
      </div>
      <div className='rectangle mx-auto mb-4 w-56 h-2 rounded-full bg-gray-300'></div>

      {/* Grid container for images */}
      <div className='columns-1 sm:columns-2 md:columns-3 gap-2'>
        {images.map((image, index) => (
          <img
            className='w-full  object-cover rounded-xl my-2' // Set a fixed height for all images
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;

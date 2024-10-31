import { AlertTriangle } from 'lucide-react';
import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1619463206719-f87a692cdd7a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc5OTV8MHwxfGFsbHw3fHx8fHx8fHwxNjcwMTY4MjMw&q=80&w=400',
    alt: 'Beautiful Landscape 3',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 7',
  },
  {
    src: 'https://images.unsplash.com/photo-1706188569249-aa6dd293771c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 1',
  },

  {
    src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1706188699984-706f7472ecc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 6',
  },

  {
    src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=2859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Beautiful Landscape 8',
  },

  {
    src:"https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:"Beautiful Landscape 9"
  },
  {
    src:"https://images.unsplash.com/photo-1697997099121-a4514f781c54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:"Beautiful Landscape 10"
  },
  {
    src:"https://images.unsplash.com/photo-1712246754649-119c1cef4a43?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:"Beautiful Landscape 11"
  },
  {
    src:"https://plus.unsplash.com/premium_photo-1701113010522-5d7e58d333ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:"Beautiful Landscape 12"
  }
];

const BentoGrid = () => {
  return (
    <div className='overlap-group relative w-full p-4'>
      <div className='text-wrapper text-center pt-4 font-istok-web-regular font-bold text-black dark:text-white text-2xl'>
        PHOTO GALLERY
      </div>
      <div className='rectangle mx-auto mb-4 w-56 h-[5px] bg-cyan-600'></div>

      {/* Grid container for images */}
    <div className='columns-1 sm:columns-2 md:columns-3 gap-4'>
        {images.map((image, index) => (
          <div key={index} className='flex justify-center mt-4'>
            <img
              className='w-full  object-cover rounded-[15px]' // Set a fixed height for all images
              src={image.src}
              alt={image.alt}
              onLoad={() => console.log(`Image ${index + 1} loaded`)}
              onError={() => console.log(`Image ${index + 1} failed to load`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;

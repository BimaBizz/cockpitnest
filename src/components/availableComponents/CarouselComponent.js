'use client';
import React, { useState, useEffect } from 'react';

const CarouselComponent = ({ data, remove }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.items.length]);

  if (remove) return null;

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="overflow-hidden rounded-md w-full h-[75vh] relative">
      {data.items.map((item, index) => (
        <div 
          key={index} 
          className={`carousel-item h-full relative justify-end items-center p-10 bg-center bg-cover ${index === currentIndex ? 'fade-in' : 'fade-out'}`} 
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSETS_URL+item.Image.path})`}}
        >
          <div className="carousel-caption p-4 bg-opacity-80 bg-base-100 w-full max-w-md md:max-w-xl lg:max-w-2xl space-y-4 backdrop-blur-sm rounded-md">
            <h3 className="text-2xl md:text-3xl font-bold">{item.Title}</h3>
            <p className="text-md md:text-lg">{item.subTitle}</p>
            <a href={item.button.link} className="btn btn-primary mt-2">{item.button.labelButton}</a>
          </div>
        </div>
      ))}
      <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.items.map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToIndex(index)} 
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
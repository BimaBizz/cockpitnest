import React from 'react';

const HeroComponent = ({ data, remove }) => {
  return remove ? null : (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${process.env.NEXT_ASSETS_URL}${data.image.path})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
          <p className="mb-5">{data.subtitle}</p>
          {!data.hideButton && (
            <button className="btn btn-primary">Get Started</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
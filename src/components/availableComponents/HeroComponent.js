import React from 'react';
import Link from 'next/link';

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
          {!data.button.hideButton && data.button.link && (
            <Link href={data.button.link} className="btn btn-primary">{data.button.label}</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
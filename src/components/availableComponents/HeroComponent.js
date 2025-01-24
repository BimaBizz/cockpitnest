import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroComponent = ({ data, remove }) => {
  return remove ? null : (
    <div
      className="flex justify-center items-center min-h-[85vh]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex flex-col items-center md:items-start  justify-start md:justify-center">
          <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
          <p className="mb-5">{data.subtitle}</p>
          {!data.button.hideButton && data.button.link && (
            <Link href={data.button.link} className="btn btn-primary">{data.button.label}</Link>
          )}
        </div>
        <div className="">
          <Image
            src={process.env.NEXT_ASSETS_URL+data.image.path}
            alt={data.image.altText}
            width={data.image.width}
            height={data.image.height}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
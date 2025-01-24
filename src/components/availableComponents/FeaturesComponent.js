import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const FeaturesComponent = ({ data, remove }) => {

    if (remove) return null;

  return (
    <Link href={data.link} className="card bg-base-200 shadow-none hover:shadow-xl hover:shadow-base-300 transition-shadow duration-500">
        <div className="card-body h-52">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.subTitle}</p>
        </div>
        <figure className='h-[500px]'>
            <div className='object-cover w-full h-full pl-4 pb-4 object-center overflow-hidden'>
                <Image src={process.env.NEXT_ASSETS_URL+data.image.path} alt={data.title} width={data.image.width} height={data.image.height} className='h-full rounded-l-lg object-cover'/>
            </div>
        </figure>
    </Link>
  )
}

export default FeaturesComponent
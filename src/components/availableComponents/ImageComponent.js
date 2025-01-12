import Image from 'next/image';

const ImageComponent = ({ data, remove }) => {
  if (remove || !data || !data.asset) return null;

  const { path, width, height, altText } = data.asset;
  const src = process.env.NEXT_ASSETS_URL ? process.env.NEXT_ASSETS_URL + path : path;

  return (
    <div className="rounded-lg overflow-hidden h-full w-full shadow-xl">
      <figure className='w-full h-full'>
        <Image
        className='w-full h-full object-cover object-center'
          src={src}
          width={width}
          height={height}
          alt={altText || 'Image'}
        />
      </figure>
    </div>
  );
};

export default ImageComponent;

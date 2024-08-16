// components/availableComponents/ImageComponent.js
import Image from 'next/image';

const ImageComponent = ({ data, remove }) => (
  remove ? null : <Image width={data.asset.width} height={data.asset.height} src={`${process.env.HOST}/storage/uploads/${data.asset.path}`} alt={data.asset.altText} className={`rounded-lg ${data.class}`} />
);

export default ImageComponent;

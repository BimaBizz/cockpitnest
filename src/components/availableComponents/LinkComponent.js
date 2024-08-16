// components/availableComponents/LinkComponent.js
import Link from 'next/link';

const LinkComponent = ({ data, remove }) => (
  remove ? null : <Link href={data.url} target={data.target} className="hover:underline text-blue-500">{data.caption}</Link>
);

export default LinkComponent;

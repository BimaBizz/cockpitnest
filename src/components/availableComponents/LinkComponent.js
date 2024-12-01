import Link from 'next/link';

const LinkComponent = ({ data, remove }) => (
  remove ? null : (
    <Link href={data.url} target={data.target} className="hover:underline text-primary">
      {data.caption}
    </Link>
  )
);

export default LinkComponent;

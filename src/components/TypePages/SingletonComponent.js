import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";
import Image from "next/image";

const SingletonComponent = ({ singleton }) => {
  if (!singleton.data || !singleton.data.layout) {
    notFound(); // Redirect to 404 page
  }

  return (
    <div>
      {singleton.data.layout.before.map((section) => (
        <ComponentRenderer key={section.id} component={section} />
      ))}
      <div className="container mx-auto p-4 flex gap-4">
        {singleton.data.data.image && (
          <Image
            src={
              process.env.NEXT_HOST +
              "/storage/uploads" +
              singleton.data.data.image.path
            }
            alt={singleton.data.data.image.altText}
            width={singleton.data.data.image.width}
            height={singleton.data.data.image.height}
            className="rounded-lg"
          />
        )}
        {
          <div
            id="post"
            dangerouslySetInnerHTML={{ __html: singleton.data.data.post }}
          ></div>
        }
      </div>
      {singleton.data.layout.after.map((section) => (
        <ComponentRenderer key={section.id} component={section} />
      ))}
    </div>
  );
};

export default SingletonComponent;
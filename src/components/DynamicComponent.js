import ComponentRenderer from "./ComponentRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const DynamicComponent = ({ layout, collection, singleton }) => {
  if (!layout && !collection && !singleton) {
    notFound(); // Redirect to 404 page
  }

  if (layout) {
    if (!layout.data || !layout.data.layout) {
      notFound(); // Redirect to 404 page
    }

    return (
      <div>
        {layout.data.layout.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
      </div>
    );
  }

  if (collection) {
    if (!collection.data || (!collection.data.items && !collection.data.item)) {
      notFound(); // Redirect to 404 page
    }

    return (
      <div>
        {collection.data.layoutList.before.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
        <div className="container mx-auto p-4">
          {collection.data.items ? (
            collection.data.items.map((item) => (
              <div key={item.item._id} className="p-4">
                <Link href={item.route}>
                  <h2>{item.item.title}</h2>
                </Link>
                <div
                  id="post"
                  dangerouslySetInnerHTML={{ __html: item.item.post }}
                />
              </div>
            ))
          ) : (
            <div className="container mx-auto p-4">
              <h2>{collection.data.item.title}</h2>
              <div
                id="post"
                dangerouslySetInnerHTML={{ __html: collection.data.item.post }}
              />
            </div>
          )}
        </div>
        {collection.data.layoutList.after.map((section) => (
          <ComponentRenderer key={section.id} component={section} />
        ))}
      </div>
    );
  }

  if (singleton) {
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
  }

  return null;
};

export default DynamicComponent;

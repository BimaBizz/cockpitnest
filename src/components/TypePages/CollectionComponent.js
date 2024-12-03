import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";

const CollectionComponent = ({ collection }) => {
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
};

export default CollectionComponent;
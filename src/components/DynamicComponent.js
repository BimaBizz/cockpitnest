import { notFound } from "next/navigation";
import LayoutComponent from "@/components/TypePages/LayoutComponent";
import CollectionComponent from "@/components/TypePages/CollectionComponent";
import SingletonComponent from "@/components/TypePages/SingletonComponent";

const DynamicComponent = ({ layout, collection, singleton, lang }) => {
  if (!layout && !collection && !singleton) {
    notFound(); // Redirect to 404 page
  }

  if (layout) {
    return <LayoutComponent layout={layout} lang={lang}/>;
  }

  if (collection) {
    return <CollectionComponent collection={collection} lang={lang}/>;
  }

  if (singleton) {
    return <SingletonComponent singleton={singleton} lang={lang}/>;
  }

  return null;
};

export default DynamicComponent;

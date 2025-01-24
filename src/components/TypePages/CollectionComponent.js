
import ProductsPage from "./collectionPages/ProductsPage";

const CollectionComponent = ({ collection, lang }) => {
  switch (collection.data.collection) {
    case "plants":
      return <ProductsPage collection={collection} lang={lang}/>;
    case "outlet":
      return <ProductsPage collection={collection} lang={lang}/>;
    default:
      return <div>Unknown collection type: {collection.data.collection}</div>;
  }
};

export default CollectionComponent;
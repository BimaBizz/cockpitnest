
import ProductsPage from "./collectionPages/ProductsPage";

const CollectionComponent = ({ collection }) => {
  switch (collection.data.collection) {
    case "products":
      return <ProductsPage collection={collection} />;
    default:
      return <div>Unknown collection type: {collection.data.collection}</div>;
  }
};

export default CollectionComponent;
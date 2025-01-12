const CollectionComponent = ({ collection }) => {
  switch (collection.data.collection) {
    default:
      return <div>Unknown collection type: {collection.data.collection}</div>;
  }
};

export default CollectionComponent;
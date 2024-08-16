// components/availableComponents/DividerComponent.js
const DividerComponent = ({ remove }) => (
    remove ? null : <hr className="border border-gray-300 my-4" />
  );
export default DividerComponent;

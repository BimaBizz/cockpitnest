// components/availableComponents/DividerComponent.js
const DividerComponent = ({ remove }) => (
  remove ? null : (
    <div className="flex w-full flex-col">
      <div className="divider" />
    </div>
  )
);

export default DividerComponent;

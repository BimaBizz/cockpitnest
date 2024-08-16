// components/availableComponents/SpacerComponent.js
const SpacerComponent = ({ size, remove }) => (remove ? null : <div style={{ height: size }} className="spacer" />);
export default SpacerComponent;

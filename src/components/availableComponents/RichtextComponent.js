// components/availableComponents/RichtextComponent.js
const RichtextComponent = ({ html, remove }) => (
    remove ? null : <div dangerouslySetInnerHTML={{ __html: html }} className="richtext" />
  );
  
  export default RichtextComponent;
  
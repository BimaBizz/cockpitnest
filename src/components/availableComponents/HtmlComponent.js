// components/availableComponents/HtmlComponent.js
const HtmlComponent = ({ html, remove }) => (
    remove ? null : <div dangerouslySetInnerHTML={{ __html: html }} className="container mx-auto p-4" />
  );
  
  export default HtmlComponent;
  
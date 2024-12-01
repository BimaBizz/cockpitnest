// components/availableComponents/HtmlComponent.js
const HtmlComponent = ({ html, remove }) => (
  remove ? null : (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="prose md:prose-lg lg:prose-xl"
    />
  )
);

export default HtmlComponent;

// components/availableComponents/HeadingComponent.js
const HeadingComponent = ({ text, level, remove }) => {
    const Tag = `h${level}`;
    return remove ? null : <Tag className="heading">{text}</Tag>;
  };
  
  export default HeadingComponent;
  
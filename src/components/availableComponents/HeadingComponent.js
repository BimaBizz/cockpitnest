// components/availableComponents/HeadingComponent.js
const HeadingComponent = ({ text, level, remove }) => {
  const Tag = `h${level}`;
  return remove ? null : (
    <div className="prose md:prose-lg lg:prose-xl">
      <Tag>{text}</Tag>
    </div>
  );
};

export default HeadingComponent;

// components/availableComponents/MarkdownComponent.js
import Showdown from 'showdown';

const MarkdownComponent = ({ markdown, remove }) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return remove ? null : <div className="markdown" dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />;
};

export default MarkdownComponent;

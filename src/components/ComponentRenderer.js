import DividerComponent from '@/components/availableComponents/DividerComponent';
import LinkComponent from '@/components/availableComponents/LinkComponent';
import GridComponent from '@/components/availableComponents/GridComponent';
import RowComponent from '@/components/availableComponents/RowComponent';
import SectionComponent from '@/components/availableComponents/SectionComponent';
import SpacerComponent from '@/components/availableComponents/SpacerComponent';
import ImageComponent from '@/components/availableComponents/ImageComponent';
import VideoComponent from '@/components/availableComponents/VideoComponent';
import HtmlComponent from '@/components/availableComponents/HtmlComponent';
import HeadingComponent from '@/components/availableComponents/HeadingComponent';
import MarkdownComponent from '@/components/availableComponents/MarkdownComponent';
import RichtextComponent from '@/components/availableComponents/RichtextComponent';
import ButtonComponent from '@/components/availableComponents/ButtonComponent';

const ComponentRenderer = ({ component }) => {
  switch (component.component) {
    case 'divider':
      return <DividerComponent remove={component.hidden} />;
    case 'link':
      return <LinkComponent data={component.data} remove={component.hidden} />;
    case 'grid':
      return <GridComponent columns={component.columns} data={component.data} remove={component.hidden} />;
    case 'row':
      return <RowComponent meta={component.meta} data={component.data} columns={component.columns} remove={component.hidden} />;
    case 'section':
      return <SectionComponent meta={component.meta} remove={component.hidden}>{component.children}</SectionComponent>;
    case 'spacer':
      return <SpacerComponent size={component.data.size} remove={component.hidden} />;
    case 'image':
      return <ImageComponent data={component.data} remove={component.hidden} />;
    case 'video':
      return <VideoComponent data={component.data} remove={component.hidden} />;
    case 'html':
      return <HtmlComponent html={component.data.html} remove={component.hidden} />;
    case 'heading':
      return <HeadingComponent text={component.data.text} level={component.data.level} remove={component.hidden} />;
    case 'markdown':
      return <MarkdownComponent markdown={component.data.markdown} remove={component.hidden} />;
    case 'richtext':
      return <RichtextComponent html={component.data.html} remove={component.hidden} />;
    case 'button':
      return <ButtonComponent data={component} />;
    default:
      return <div>Unknown component type: {component.component}</div>;
  }
};

export default ComponentRenderer;
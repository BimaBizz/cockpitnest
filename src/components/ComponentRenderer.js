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
import HeroComponent from '@/components/availableComponents/HeroComponent';
import Navbar from '@/components/availableComponents/NavbarComponent';
import FooterComponent from '@/components/availableComponents/FooterComponent';
import CardComponent from '@/components/availableComponents/CardComponent';
import FormComponent from '@/components/availableComponents/FormComponent';
import SelectComponent from '@/components/availableComponents/SelectComponent';
import InputFileComponent from '@/components/availableComponents/InputFileComponent';
import CheckboxComponent from '@/components/availableComponents/CheckboxComponent';
import TextInputComponent from '@/components/availableComponents/TextInputComponent';
import TextareaComponent from './availableComponents/TextareaComponent';

const ComponentRenderer = ({ component }) => {
  switch (component.component) {
    case 'divider':
      return <DividerComponent remove={component.hidden} />;
    case 'link':
      return <LinkComponent data={component.data} remove={component.hidden} />;
    case 'grid':
      return <GridComponent columns={component.columns} data={component.data} remove={component.hidden} />;
    case 'row':
      return <RowComponent data={component.data} columns={component.columns} remove={component.hidden} />;
    case 'section':
      return <SectionComponent data={component.data} remove={component.hidden} >{component.children}</SectionComponent>;
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
    case 'hero' :
      return <HeroComponent data={component.data} remove={component.hidden} />
    case 'navbar':
      return <Navbar theme={component.data.enableTheme} search={component.data.enableSearch} remove={component.hidden}/>
    case 'footer':
      return <FooterComponent data={component.data} remove={component.hidden} />
    case 'card':
      return <CardComponent data={component.data} remove={component.hidden} />;
    case 'form':
      return <FormComponent data={component.data} children={component.children} remove={component.hidden} />;
    case 'select':
      return <SelectComponent data={component.data} remove={component.hidden} />;
    case 'fileInput':
      return <InputFileComponent data={component.data} remove={component.hidden} />;
    case 'checkbox':
      return <CheckboxComponent data={component.data} remove={component.hidden} />;
    case 'input':
      return <TextInputComponent data={component.data} remove={component.hidden} />;
    case 'textarea':
      return <TextareaComponent data={component.data} remove={component.hidden} />;
    default:
      return <div>Unknown component type: {component.component}</div>;
  }
};

export default ComponentRenderer;
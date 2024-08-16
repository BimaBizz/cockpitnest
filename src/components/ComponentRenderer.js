// components/ComponentRenderer.js
import React from 'react';
import DividerComponent from './availableComponents/DividerComponent';
import LinkComponent from './availableComponents/LinkComponent';
import GridComponent from './availableComponents/GridComponent';
import RowComponent from './availableComponents/RowComponent';
import SectionComponent from './availableComponents/SectionComponent';
import SpacerComponent from './availableComponents/SpacerComponent';
import ImageComponent from './availableComponents/ImageComponent';
import VideoComponent from './availableComponents/VideoComponent';
import HtmlComponent from './availableComponents/HtmlComponent';
import HeadingComponent from './availableComponents/HeadingComponent';
import MarkdownComponent from './availableComponents/MarkdownComponent';
import RichtextComponent from './availableComponents/RichtextComponent';
import ButtonComponent from './availableComponents/ButtonComponent';

const ComponentRenderer = ({ component }) => {
  switch (component.component) {
    case 'divider':
      return <DividerComponent remove={component.hidden} />;
    case 'link':
      return <LinkComponent data={component.data} remove={component.hidden} />;
    case 'grid':
      return <GridComponent data={component.data} columns={component.columns} />;
    case 'row':
      return <RowComponent data={component.data} columns={component.columns} remove={component.hidden} />;
    case 'section':
      return <SectionComponent data={component.data} children={component.children} remove={component.hidden} />;
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

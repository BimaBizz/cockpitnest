// components/availableComponents/SectionComponent.js
import ComponentRenderer from '../ComponentRenderer';

const SectionComponent = ({ data, children, remove }) => (
  remove ? null : (
    <section className={`p-4 ${data.class}`}>
      {children.map((child) => (
        <ComponentRenderer key={child.id} component={child} />
      ))}
    </section>
  )
);

export default SectionComponent;

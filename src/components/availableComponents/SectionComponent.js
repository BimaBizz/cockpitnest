// components/availableComponents/SectionComponent.js
import ComponentRenderer from '@/components/ComponentRenderer';

const SectionComponent = ({ data, children, remove }) => (
  remove ? null : (
    <section className="p-4 max-w-7xl mx-auto">
      {children.map((child) => (
        <ComponentRenderer key={child.id} component={child} />
      ))}
    </section>
  )
);

export default SectionComponent;

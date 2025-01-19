// components/availableComponents/SectionComponent.js
import ComponentRenderer from '@/components/ComponentRenderer';

const SectionComponent = ({ meta, children, remove }) => (
  remove ? null : (
      <div className={`${meta?.bg}`}>
    <section className="p-4 max-w-7xl mx-auto">
        {children.map((child) => (
          <ComponentRenderer key={child.id} component={child} />
        ))}
    </section>
      </div>
  )
);

export default SectionComponent;

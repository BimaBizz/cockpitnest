// components/availableComponents/SectionComponent.js
import ComponentRenderer from '@/components/ComponentRenderer';

const SectionComponent = ({ meta, children, remove, lang }) => (
  remove ? null : (
      <div style={{backgroundColor: meta?.bg}}>
      <section className="p-4 max-w-7xl mx-auto" style={{padding: meta?.padding}}>
        {children.map((child) => (
          <ComponentRenderer key={child.id} component={child} lang={lang}/>
        ))}
      </section>
      </div>
  )
);

export default SectionComponent;

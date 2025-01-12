import ComponentRenderer from '@/components/ComponentRenderer';

const SectionComponent = ({ meta, children, remove }) => {
  const style = {
    backgroundColor: meta.bgColor || undefined,
    padding: meta.padding || undefined,
    margin: meta.margin || undefined,
  };

  return (
    remove ? null : (
      <section className="p-4 max-w-7xl mx-auto" style={style}>
        {children.map((child) => (
          <ComponentRenderer key={child.id} component={child} />
        ))}
      </section>
    )
  );
};

export default SectionComponent;

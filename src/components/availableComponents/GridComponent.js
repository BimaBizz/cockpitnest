import ComponentRenderer from "@/components/ComponentRenderer";

const GridComponent = ({ columns, remove, data, meta }) =>
  remove ? null : (
    <div
      className={`rounded-xl gap-4 grid md:grid-cols-2 lg:grid-cols-${data.colWidth}`}
      style={{ backgroundColor: meta?.bg, padding: meta?.padding }}
    >
      {columns.map((column, index) => (
        <div key={index}>
          {column.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
      ))}
    </div>
  );

export default GridComponent;

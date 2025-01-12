import ComponentRenderer from '@/components/ComponentRenderer';

const RowComponent = ({ data, columns, remove, meta }) => {
  const style = {
    backgroundColor: meta.bgColor || undefined,
    padding: meta.padding || undefined,
    margin: meta.margin || undefined,
  };

  return (
    remove ? null : (
      <div className={`mx-auto p-4 flex flex-wrap-reverse justify-center gap-4`} style={style}>
        {columns.map((column, index) => (
          <div key={index} className={`w-${column.data.width ? column.data.width.replace('-', '/') : '1/4'} h-64`}>
            {column.components.map((component) => (
              <ComponentRenderer key={component.id} component={component} />
            ))}
          </div>
        ))}
      </div>
    )
  );
};

export default RowComponent;

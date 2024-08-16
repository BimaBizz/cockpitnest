// components/availableComponents/RowComponent.js
import ComponentRenderer from '../ComponentRenderer';

const RowComponent = ({ data, columns, remove }) => (
  remove ? null : (
    <div className={`container mx-auto p-4 row ${data.class}`}>
      {columns.map((column, index) => (
        <div key={index} style={{ width: column.data.width }} className={`column ${column.data.class}`}>
          {column.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
      ))}
    </div>
  )
);

export default RowComponent;

// components/availableComponents/GridComponent.js
import ComponentRenderer from '../ComponentRenderer';

const GridComponent = ({ data, columns, remove }) => (
  remove ? null : (
    <div className={`gap-4 ${data.class}`}>
      {columns.map((column, index) => (
        <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {column.components.map((component) => (
            <ComponentRenderer key={component.id} component={component} />
          ))}
        </div>
      ))}
    </div>
  )
);

export default GridComponent;

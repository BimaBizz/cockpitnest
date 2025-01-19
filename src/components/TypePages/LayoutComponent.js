import ComponentRenderer from "@/components/ComponentRenderer";
import { notFound } from "next/navigation";

const LayoutComponent = ({ layout, lang }) => {
  if (!layout.data || !layout.data.layout) {
    notFound(); // Redirect to 404 page
  }

  return (
    <div>
      {layout.data.layout.map((section) => (
        <ComponentRenderer key={section.id} component={section} lang={lang}/>
      ))}
    </div>
  );
};

export default LayoutComponent;
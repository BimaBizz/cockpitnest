import DynamicComponent from "@/components/DynamicComponent";
import { fetchLayout } from "@/lib/hook";
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const slug = (await params).slug;
  const fullSlug = `/${slug.join("/")}`;

  try {
    const layout = await fetchLayout(fullSlug)

    if (layout.type === "layout") {
      return <DynamicComponent layout={layout} />;
    } else if (layout.type === "collection") {
      return <DynamicComponent collection={layout} />;
    } else if (layout.type === "singleton") {
      return <DynamicComponent singleton={layout} />;
    } else {
      notFound();
    }
    
  } catch (error) {
    return (
      notFound()
    );
  }
}

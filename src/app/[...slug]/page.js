import DynamicComponent from "@/components/DynamicComponent";
import { fetchLayout } from "@/lib/hook";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const fullSlug = `/${slug.join("/")}`;

  try {
    const layout = await fetchLayout(fullSlug)

    if (!layout) {
      return (
        <div>
          <h1>Page not found</h1>
          <p>No content found for this path: {fullSlug}</p>
        </div>
      );
    }

    if (layout.type === "layout") {
      return <DynamicComponent layout={layout} />;
    } else if (layout.type === "collection") {
      return <DynamicComponent collection={layout} />;
    } else if (layout.type === "singleton") {
      return <DynamicComponent singleton={layout} />;
    }
    
  } catch (error) {
    return (
      <div>
        <h1>Error loading content</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

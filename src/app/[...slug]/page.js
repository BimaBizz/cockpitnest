import DynamicComponent from "@/components/DynamicComponent";
import { fetchLayout } from "@/lib/hook";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const fullSlug = `/${slug.join("/")}`;

  try {
    
    const layout = await fetchLayout(fullSlug);

    
    if (!layout) {
      return (
        <div>
          <h1>Page not found</h1>
          <p>No layout found for this path: {fullSlug}</p>
        </div>
      );
    }

    return <DynamicComponent layout={layout} />;
  } catch (error) {
    return (
      <div>
        <h1>Error loading layout</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

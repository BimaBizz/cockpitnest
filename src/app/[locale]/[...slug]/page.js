import DynamicComponent from "@/components/DynamicComponent";
import { fetchLayout } from "@/lib/hook";
import { notFound } from 'next/navigation';
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const fullSlug = `/${slug.join("/")}`;
  const locale = await cookies()

  try {
    const layout = await fetchLayout(fullSlug, locale.get('NEXT_LOCALE').value);
    
    let seo = {
      title: "404 Not Found",
      description: "Page not found",
      robots: "noindex, nofollow",
    };

    if (layout.seo) {
      seo = {
        title: layout.seo.title,
        description: layout.seo.description,
        keywords: layout.seo.keywords,
        images: layout.seo.image ? [
          {
            url: process.env.NEXT_ASSETS_URL + layout.seo.image.path,
            width: layout.seo.image.width,
            height: layout.seo.image.height,
            alt: layout.seo.image.altText,
          },
        ] : [],
      };
    }

    if (layout.data && layout.data.item && layout.data.item.seo) {
      seo = {
        title: layout.data.item.seo.title,
        description: layout.data.item.seo.description,
        keywords: layout.data.item.seo.keywords,
        images: layout.data.item.seo.image ? [
          {
            url: process.env.NEXT_ASSETS_URL + layout.data.item.seo.image.path,
            width: layout.data.item.seo.image.width,
            height: layout.data.item.seo.image.height,
            alt: layout.data.item.seo.image.altText,
          },
        ] : [],
      };
    }

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: fullSlug,
        images: seo.images,
      },
      twitter: {
        card: 'summary_large_image',
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: "404 Not Found",
    description: "Page not found",
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }) {
  const slug = (await params).slug;
  const locale = (await params).locale;
  const fullSlug = `/${slug.join("/")}`;

  try {
    const layout = await fetchLayout(fullSlug, locale);

    const route = layout._locale === 'default' ? 'id' : locale;

    if (layout.type === "layout") {
      return <DynamicComponent layout={layout} lang={route}/>;
    } else if (layout.type === "collection") {
      return <DynamicComponent collection={layout} lang={route}/>;
    } else if (layout.type === "singleton") {
      return <DynamicComponent singleton={layout} lang={route}/>;
    } else {
      notFound();
    }
  } catch (error) {
    return (
      notFound()
    );
  }
}

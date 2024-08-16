import { Poppins } from "next/font/google";
import "./globals.css";
import { fetcSettings } from "@/lib/hook";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata() {
  const setting = (await fetcSettings()) || {};

  // Set default values for SEO
  const seo = setting.seo || {
    title: "Default Title",
    description: "Default Description",
    keywords: "default, keywords",
    noindex: false,
    nofollow: false,
    image: {
      title: "Default Image Title",
      description: "Default Image Description",
      path: "/default-image.png",
    },
  };

  const images = setting.images || {
    favicon: {
      path: "/default-favicon.png",
    },
  };

  const otherMetadata = {};
  if (setting.meta && typeof setting.meta === 'object') {
    for (const key in setting.meta) {
      if (setting.meta[key]) {
        otherMetadata[key] = setting.meta[key];
      }
    }
  }

  return {
    title: {
      template: `%s | ${seo.title}`,
      default: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    robots: {
      index: !seo.noindex,
      follow: !seo.nofollow,
      googleBot: {
        index: !seo.noindex,
        follow: !seo.nofollow,
      },
    },
    icons: {
      icon: `${process.env.HOST}/storage/uploads${!images.favicon ? "/default-favicon.png" : images.favicon.path}`,
    },
    openGraph: {
      title: !seo.image ? seo.title : seo.image.title,
      description: !seo.image ? seo.description : seo.image.description,
      url: process.env.DOMAIN,
      siteName: !seo.image ? seo.title : seo.title,
      images: [
        {
          url: `${process.env.HOST}/storage/uploads${!seo.image ? "/default-image.png" : seo.image.path}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.HOST}/storage/uploads${!seo.image ? "/default-image.png" : seo.image.path}`, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: !seo.image ? seo.title : seo.image.title,
        },
      ],
    },
    other: Object.keys(otherMetadata).length > 0 ? otherMetadata : undefined,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

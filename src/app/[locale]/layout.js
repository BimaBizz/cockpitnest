import "./../globals.css";
import { Poppins } from 'next/font/google';
import { fetchSettings } from '@/lib/hook';
import { cookies } from 'next/headers'; // Import cookies
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const defaultSeoSettings = {
  title: 'CockpitNest',
  description: 'Default Description',
  keywords: 'default, keywords',
  noindex: false,
  nofollow: false,
  image: {
    path: '/default-image.jpg',
    width: 1200,
    height: 630,
    altText: 'Default Image Alt Text',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const settings = await fetchSettings(locale);
  const seoSettings = settings.seo || defaultSeoSettings;

  const otherMeta = settings.meta || {};
  const other = Object.keys(otherMeta).length > 0 ? otherMeta : undefined;

  return {
    title: {
      template: seoSettings.title + ' | %s',
      default: seoSettings.title
    },
    description: seoSettings.description,
    keywords: seoSettings.keywords,
    robots: `${seoSettings.noindex ? 'noindex' : 'index'},${seoSettings.nofollow ? 'nofollow' : 'follow'}`,
    icons: {
      icon: process.env.NEXT_PUBLIC_ASSETS_URL + (settings.images?.favicon?.path || '/default-favicon.ico'),
    },
    openGraph: {
      title: seoSettings.title,
      description: seoSettings.description,
      images: [
        {
          url: process.env.NEXT_PUBLIC_ASSETS_URL+seoSettings.image.path,
          width: seoSettings.image.width,
          height: seoSettings.image.height,
          alt: seoSettings.image.altText,
        },
      ],
      url: settings.preview?.[0]?.uri || 'https://default-url.com',
    },
    twitter: {
      card: 'summary_large_image',
    },
    other,
  };
}

export default async function RootLayout({ children, params }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'default';

  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="store">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}

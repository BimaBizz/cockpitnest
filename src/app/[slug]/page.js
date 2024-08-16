// app/[slug]/page.js
import React from 'react';
import { fetchLayout } from '@/lib/hook';
import DynamicComponent from '@/components/DynamicComponents';
import { notFound } from 'next/navigation';

const data = async (slug) => {

  const datas = await fetchLayout(slug);

  return datas;
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const SEO = await data("/"+slug);

  if (SEO.error === "Page not found!") {
    notFound(); // Redirect to 404 page
  }

  return {
    title: SEO.seo.title,
    description: SEO.seo.description,
    keywords: SEO.seo.keywords,
    robots: {
      index: !SEO.seo.noindex,
      follow: !SEO.seo.nofollow,
      googleBot: {
        index: !SEO.seo.noindex,
        follow: !SEO.seo.nofollow,
      },
    },
    openGraph: {
      title: SEO.seo.image.title,
      description: SEO.seo.image.description,
      url: process.env.DOMAIN+"/"+slug,
      siteName: SEO.seo.title,
      images: [
        {
          url: `${process.env.HOST}/storage/uploads${SEO.seo.image.path}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.HOST}/storage/uploads${SEO.seo.image.path}`, // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: SEO.seo.image.title,
        },
      ],
    },
  }
}

export default async function SlugPage({ params }) {
  const { slug } = params;
  const pageData = await data("/"+slug);
  
  if (!pageData) {
    notFound(); // Redirect to 404 page
  }

  const isLayout = pageData.type === 'layout';
  const isCollection = pageData.type === 'collection';
  const isSingleton = pageData.type === 'singleton';

  if (!isLayout && !isCollection && !isSingleton) {
    notFound(); // Redirect to 404 page
  }

  return (
    <DynamicComponent 
      layout={isLayout ? pageData : null} 
      collection={isCollection ? pageData : null}
      singleton={isSingleton ? pageData : null} 
    />
  );
}

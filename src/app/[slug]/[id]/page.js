// app/[slug]/[id]/page.js

import React from 'react';
import { fetchLayout } from '@/lib/hook';
import DynamicComponent from '@/components/DynamicComponents';
import { notFound } from 'next/navigation';

export default async function SlugPage({ params }) {
  const { slug } = params;
  const { id } = params;
  const pageData = await fetchLayout("/"+slug+"/"+id);

  if (!pageData) {
    notFound(); // Redirect to 404 page
  }

  const isLayout = pageData.type === 'layout';
  const isCollection = pageData.type === 'collection';

  if (!isLayout && !isCollection) {
    notFound(); // Redirect to 404 page
  }

  return (
    <DynamicComponent 
      layout={isLayout ? pageData : null} 
      collection={isCollection ? pageData : null} 
    />
  );
}

// app/[slug]/page.js
import React from 'react';
import { fetchLayout } from '@/lib/hook';
import DynamicComponent from '@/components/DynamicComponents';

export default async function SlugPage() {
  const layout = await fetchLayout('/');
  return <DynamicComponent layout={layout} />;
}

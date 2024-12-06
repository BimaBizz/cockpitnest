import DynamicComponent from '@/components/DynamicComponent';
import { fetchLayout } from '@/lib/hook';
import { notFound } from 'next/navigation';

export default async function Home() {
  const layout = await fetchLayout('/');
  if (layout.error) {
    notFound();
  }
  return <DynamicComponent layout={layout} />;
}

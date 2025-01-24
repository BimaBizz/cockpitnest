import DynamicComponent from '@/components/DynamicComponent';
import { fetchLayout } from '@/lib/hook';
import { notFound } from 'next/navigation';

export default async function Home({params}) {
  const locale = (await params).locale;
  const layout = await fetchLayout('/', locale);

  // Define the route variable
  const route = layout._locale === 'default' ? 'id' : locale;

  if (layout.error) {
    notFound();
  }
  return <DynamicComponent layout={layout} lang={route}/>;
}

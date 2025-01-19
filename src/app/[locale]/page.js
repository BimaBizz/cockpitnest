import DynamicComponent from '@/components/DynamicComponent';
import { fetchLayout } from '@/lib/hook';
import { notFound } from 'next/navigation';

export default async function Home({params}) {
  const locale = (await params).locale;
  const layout = await fetchLayout('/', locale);

  if (layout.error) {
    notFound();
  }
  return <DynamicComponent layout={layout} lang={locale}/>;
}

import DynamicComponent from '@/components/DynamicComponent';
import { fetchLayout } from '@/lib/hook';

export default async function Home() {
  const layout = await fetchLayout('/');
  return <DynamicComponent layout={layout} />;
}

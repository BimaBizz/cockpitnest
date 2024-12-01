import DynamicComponent from '@/components/DynamicComponent';
import { fetchLayout } from '@/lib/hook';

export default async function Home() {
  const layout = await fetchLayout('/home');
  return <DynamicComponent layout={layout} />;
}

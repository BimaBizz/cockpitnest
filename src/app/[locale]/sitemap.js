import { fetchSitemap } from "@/lib/hook";
export async function getData() {

    const data = await fetchSitemap();
    return data
  
}
  export default async function sitemap() {
    const data = await getData();
    
    const listmain = data.map(item => ({
      url: process.env.NEXT_PUBLIC_UR_DOMAIN + item.routes.default,
      lastModified: item.lastmod,
    }));
  
    return [
      ...listmain,
    ];
  }
  
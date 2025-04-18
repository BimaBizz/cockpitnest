import { routing } from '@/i18n/routing';

const getLocale = (lang) => {
  return lang === routing.defaultLocale ? 'default' : lang;
};

export const fetchRoutes = async () => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/routes`, {
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data.default;
  };

export const fetchLayout = async (slug, lang) => {
  lang = getLocale(lang);
  const response = await fetch(`${process.env.NEXT_HOST}/api/pages/page?route=${slug}&locale=${lang}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

export const fetchMenus = async (name, lang) => {
  lang = getLocale(lang);
  const response = await fetch(`${process.env.NEXT_HOST}/api/pages/menu/${name}?locale=${lang}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

export const fetchSettings = async (lang) => {
  lang = getLocale(lang);
  const response = await fetch(`${process.env.NEXT_HOST}/api/pages/settings?locale=${lang}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

export const fetchSitemap = async () => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/sitemap?deep=5`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

export const fetchSearch = async (index, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/detektivo/search/${index}?q=${query}`,{
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data;
  };

export const fetchLocalze = async (name, lang) => {
    lang = getLocale(lang);
    const response = await fetch(`${process.env.NEXT_HOST}/api/lokalize/project/${name}?locale=${lang}`,{
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data;
  };
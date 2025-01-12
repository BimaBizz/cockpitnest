export const fetchRoutes = async () => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/routes`, {
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data.default;
  };
  
  export const fetchLayout = async (slug) => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/page?route=${slug}`,{
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data;
  };
  
  export const fetchMenus = async (name) => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/menu/${name}`,{
        cache : 'no-cache'
    });
    const data = await response.json();
    return data;
  };

  export const fetchSettings = async () => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/settings`,{
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data;
  };

  export const fetchSitemap = async () => {
    const response = await fetch(`${process.env.NEXT_HOST}/api/pages/sitemap?deep=5`,{
        cache : 'no-cache'
    }); 
    const data = await response.json();
    return data;
  };

  export const fetchSearch = async (index, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/detektivo/search/${index}?q=${query}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };
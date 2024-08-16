export const fetchRoutes = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/routes`, {
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data.default;
  };
  
  export const fetchLayout = async (slug) => {
    const response = await fetch(`${process.env.HOST}/api/pages/page?route=${slug}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };
  
  export const fetchMenus = async (name) => {
    const response = await fetch(`${process.env.HOST}/api/pages/menu/${name}`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

  export const fetcSettings = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/settings`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };

  export const fetchSitemap = async () => {
    const response = await fetch(`${process.env.HOST}/api/pages/sitemap`,{
        cache : 'no-cache'
    }); // ganti dengan URL API kamu
    const data = await response.json();
    return data;
  };
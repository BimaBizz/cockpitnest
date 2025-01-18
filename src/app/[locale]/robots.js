export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${process.env.NEXT_PUBLIC_UR_DOMAIN}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_UR_DOMAIN,
  };
}

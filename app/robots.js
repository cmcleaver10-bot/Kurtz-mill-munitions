export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://kurtz-mill-munitions.vercel.app/sitemap.xml',
  };
}

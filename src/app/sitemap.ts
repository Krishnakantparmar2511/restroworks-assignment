import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://restroworks-assignment.vercel.app';
  const locales = ['en', 'es'];
  const pages = ['', 'contact'];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  locales.forEach(locale => {
    pages.forEach(page => {
      const url = page === '' ? `/${locale}` : `/${locale}/${page}`;
      sitemap.push({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page === '' ? '' : `/${page}`}`,
            'es': `${baseUrl}/es${page === '' ? '' : `/${page}`}`,
          },
        },
      });
    });
  });
  
  return sitemap;
}

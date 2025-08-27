
import { Metadata } from 'next';
import { Locale } from '@/i18n/setting';
import { getSEOData } from '@/lib/cms';
export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  try {
    const seoData = await getSEOData('home', params.locale);
    return {
      title: seoData.title,
      description: seoData.description,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        type: 'website',
        locale: params.locale,
        alternateLocale: params.locale === 'en' ? 'es' : 'en',
      },
      alternates: {
        canonical: `/${params.locale}`,
        languages: {
          'en': '/en',
          'es': '/es',
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Restroworks - Transform Your Business',
      description: 'Modern business solutions with Next.js and PayloadCMS',
    };
  }
}

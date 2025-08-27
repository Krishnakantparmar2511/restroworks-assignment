import { Metadata } from "next";
import { getSEOData } from "@/lib/cms";
import type { Locale } from "@/i18n/setting";
import ContactForm from "./ContactForm";


export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  try {
    const seoData = await getSEOData('contact', params.locale);
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
        canonical: `/${params.locale}/contact`,
        languages: {
          'en': '/en/contact',
          'es': '/es/contact',
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: params.locale === 'es' ? 'Contacto - Restroworks' : 'Contact - Restroworks',
      description: params.locale === 'es' ? 'Ponte en contacto con nosotros para transformar tu negocio' : 'Get in touch with us to transform your business',
    };
  }
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  return <ContactForm locale={params.locale} />;
}

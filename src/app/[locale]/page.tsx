import { Suspense } from 'react';
import { Metadata } from 'next';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Testimonial from '../../components/Testimonial';
import CTA from '../../components/CTA';
import { Locale } from '../../i18n/setting';
import { getHomepageData, getSEOData } from '../../lib/cms';
import type {HomepageData} from "../../lib/interface/interface";
import {   HeroSkeleton,  FeaturesSkeleton,  TestimonialSkeleton,  CTASkeleton } from '../../components/skeletons';


export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  try {
    const seoData = await getSEOData('home', params.locale);
    return {
      title: seoData.title,
      description: seoData.description,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        locale: params.locale,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: seoData.title,
        description: seoData.description,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Restroworks',
      description: 'CMS-powered Next.js website',
    };
  }
}

export default async function HomePage({ params }: { params: { locale: Locale } }) {

  let homepageData: HomepageData;
  
  try {
    homepageData = await getHomepageData(params.locale);
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    // Fallback data if API fails
    homepageData = {
      meta: {
        title: params.locale === 'es' ? 'Restroworks - Transforma tu Negocio' : 'Restroworks - Transform Your Business',
        description: params.locale === 'es' ? 'Soluciones modernas para tu empresa' : 'Modern solutions for your business',
        keywords: params.locale === 'es' ? 'soluciones, empresa, tecnología' : 'solutions, business, technology'
      },
      content: {
        hero: {
          title: params.locale === 'es' ? 'Transforma tu Negocio' : 'Transform Your Business',
          subtitle: params.locale === 'es' ? 'Soluciones modernas para tu empresa' : 'Modern solutions for your business',
          primaryButton: {
            text: params.locale === 'es' ? 'Comenzar' : 'Get Started',
            url: '#'
          },
          secondaryButton: {
            text: params.locale === 'es' ? 'Saber Más' : 'Learn More',
            url: '#'
          }
        },
        features: {
          heading: params.locale === 'es' ? '¿Por qué Elegir Restroworks?' : 'Why Choose Restroworks?',
          subtitle: params.locale === 'es' ? 'Descubre las características clave que nos distinguen' : 'Discover the key features that set us apart'
        },
        testimonials: {
          heading: params.locale === 'es' ? 'Lo que Dicen Nuestros Clientes' : 'What Our Clients Say',
          subtitle: params.locale === 'es' ? 'Testimonios de clientes satisfechos' : 'Testimonials from satisfied clients'
        },
        cta: {
          title: params.locale === 'es' ? '¿Listo para Comenzar?' : 'Ready to Get Started?',
          subtitle: params.locale === 'es' ? 'Nuestro equipo está aquí para ayudarte' : 'Our team is here to help you',
          primaryButton: {
            text: params.locale === 'es' ? 'Contactar' : 'Contact Us',
            url: `/${params.locale}/contact`
          },
          secondaryButton: {
            text: params.locale === 'es' ? 'Ver Demo' : 'View Demo',
            url: '#'
          },
          features: [
            params.locale === 'es' ? 'Implementación Rápida' : 'Quick Implementation',
            params.locale === 'es' ? 'Soporte 24/7' : '24/7 Support',
            params.locale === 'es' ? 'Garantía de Calidad' : 'Quality Guarantee'
          ]
        }
      }
    };
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero locale={params.locale} content={homepageData.content.hero} />
      </Suspense>
      
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features locale={params.locale} content={homepageData.content.features} />
      </Suspense>
      
      <Suspense fallback={<TestimonialSkeleton />}>
        <Testimonial locale={params.locale} content={homepageData.content.testimonials} />
      </Suspense>
      
      <Suspense fallback={<CTASkeleton />}>
        <CTA locale={params.locale} content={homepageData.content.cta} />
      </Suspense>
    </div>
  );
}
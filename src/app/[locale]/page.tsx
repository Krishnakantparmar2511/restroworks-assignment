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
import { getFallbackData, getFallbackSEOData } from '@/lib/mockData/mockData';


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
    const fallbackSEO = getFallbackSEOData(params.locale);
    return {
      title: fallbackSEO.title,
      description: fallbackSEO.description,
    };
  }
}

export default async function HomePage({ params }: { params: { locale: Locale } }) {

  let homepageData: HomepageData;
  
  try {
    homepageData = await getHomepageData(params.locale);
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    homepageData = getFallbackData(params.locale);
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
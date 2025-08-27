import { useState, useEffect } from 'react';
import { Locale } from '../i18n/setting';
import { testimonialsData } from '../components/constant/testimonialData';
import { TestimonialItem } from '../types';

export const useTestimonialCarousel = (locale: Locale) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonialsData(locale);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return {
    currentIndex,
    testimonials,
    currentTestimonial,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};

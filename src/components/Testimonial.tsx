"use client";

import { Locale } from "../i18n/setting";
import { HomepageData } from "../lib/interface/interface";
import { useTestimonialCarousel } from "../hooks";

export interface TestimonialProps {
  locale: Locale;
  content: HomepageData["content"]["testimonials"];
}

import { TestimonialItem } from "../types";

export default function Testimonial({ locale, content }: TestimonialProps) {
  const {
    currentIndex,
    testimonials,
    currentTestimonial,
    goToSlide,
    nextSlide,
    prevSlide,
  } = useTestimonialCarousel(locale);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {content.heading}
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 lg:p-16 relative overflow-hidden border border-white/20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                aria-label={
                  locale === "es"
                    ? "Testimonio anterior"
                    : "Previous testimonial"
                }
              >
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
                aria-label={
                  locale === "es" ? "Siguiente testimonio" : "Next testimonial"
                }
              >
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="px-16">
                <blockquote className="text-3xl lg:text-4xl text-slate-800 leading-relaxed mb-12 font-medium italic text-center min-h-[120px] flex items-center justify-center">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {currentTestimonial.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="font-bold text-xl text-slate-900 mb-2">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-slate-600 text-lg">
                      {currentTestimonial.position},{" "}
                      {currentTestimonial.company}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Restroworks
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-10">
                  {[...Array(5)].map((_, i: number) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, i: number) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
                }`}
                aria-label={`${
                  locale === "es" ? "Ir al testimonio" : "Go to testimonial"
                } ${i + 1}`}
              ></button>
            ))}
          </div>

          <div className="text-center mt-4 text-slate-500 text-sm">
              {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}

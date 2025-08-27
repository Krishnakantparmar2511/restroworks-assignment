import { Locale } from '../i18n/setting';
import type { HomepageData } from "../lib/interface/interface";

interface CTAProps {
  locale: Locale;
  content: HomepageData['content']['cta'];
}

export default function CTA({ locale, content }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">

      <div className="absolute inset-0 bg-slate-100/5"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            {content.title}
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-16 leading-relaxed max-w-4xl mx-auto">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button className="group relative px-10 py-5 bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
              {content.primaryButton.text}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-xl rounded-2xl transition-all duration-300 backdrop-blur-sm hover:border-white/50">
              {content.secondaryButton.text}
              <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {content.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-blue-100 font-semibold text-lg group-hover:text-white transition-colors duration-300">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-blue-500/30">
            <p className="text-blue-200 mb-8 text-lg font-medium">
              {locale === 'es' ? 'Confiado por empresas líderes en todo el mundo' : 'Trusted by leading companies worldwide'}
            </p>
            <div className="flex justify-center items-center gap-12 opacity-60">
              <div className="w-28 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-sm">Google</span>
              </div>
              <div className="w-28 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-sm">Microsoft</span>
              </div>
              <div className="w-28 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-sm">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

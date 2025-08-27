import { Locale } from '../i18n/setting';
import type { HomepageData } from "../lib/interface/interface";

interface HeroProps {
  locale: Locale;
  content: HomepageData['content']['hero'];
}

export default function Hero({ locale, content }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-100/30"></div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm font-medium text-slate-700 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              {locale === 'es' ? 'Nueva Generación de Soluciones' : 'Next-Gen Solutions'}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              {content.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              {content.subtitle}
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10">{content.primaryButton.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-lg rounded-2xl transition-all duration-300 hover:border-slate-400 hover:bg-white/50 backdrop-blur-sm">
                {content.secondaryButton.text}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
            

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">{locale === 'es' ? 'Clientes Satisfechos' : 'Happy Clients'}</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-sm text-slate-600">{locale === 'es' ? 'Tiempo Activo' : 'Uptime'}</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">{locale === 'es' ? 'Soporte' : 'Support'}</div>
              </div>
            </div>
          </div>
          

          <div className="relative">
            <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.3),transparent_50%)]"></div>
              
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              
              <div className="text-center text-white relative z-10">
                <div className="text-8xl mb-6">🚀</div>
                <div className="text-3xl font-bold mb-3">Modern Solutions</div>
                <div className="text-lg text-blue-200 opacity-90">Innovation at its finest</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-900">Fast Performance</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-900">Secure & Reliable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

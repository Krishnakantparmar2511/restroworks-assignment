import { Locale } from "../i18n/setting";
import type { HomepageData } from "../lib/interface/interface";
import { staticFeaturesData } from "./constant/featuresData";

interface FeaturesProps {
  locale: Locale;
  content: HomepageData["content"]["features"];
}

export default function Features({ locale, content }: FeaturesProps) {
  const staticFeatures = staticFeaturesData(locale);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {content.heading}
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl border border-slate-200/50 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/70 backdrop-blur-sm hover:bg-white/90"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold text-lg cursor-pointer group px-6 py-3 rounded-2xl hover:bg-blue-50 transition-all duration-300">
            <span>
              {locale === "es"
                ? "Ver Todas las Características"
                : "View All Features"}
            </span>
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

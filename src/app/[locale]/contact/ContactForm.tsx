"use client";

import { useContactForm } from "@/hooks";
import type { Locale } from "@/i18n/setting";
import { contactContent } from "./constant/data";

export default function ContactForm({ locale }: { locale: Locale }) {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    status,
    resetForm,
  } = useContactForm();
  
  const content = contactContent[locale];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {content.form.submit}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.name}
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.name 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-300"
                    }`}
                    placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.email}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-300"
                    }`}
                    placeholder={locale === "es" ? "tu@email.com" : "your@email.com"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      errors.message 
                        ? "border-red-300 focus:ring-red-500" 
                        : "border-gray-300"
                    }`}
                    placeholder={locale === "es" ? "Cuéntanos sobre tu proyecto..." : "Tell us about your project..."}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? content.form.submitting : content.form.submit}
                </button>

                {/* Root error message */}
                {errors.root && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                    {errors.root.message}
                  </div>
                )}
                

                {status === "done" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                    {content.form.success}
                  </div>
                )}
                
                {status === "error" && !errors.root && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
                    {content.form.error}
                  </div>
                )}

                {/* Reset button when form is successful */}
                {status === "done" && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                  >
                    {locale === "es" ? "Enviar otro mensaje" : "Send another message"}
                  </button>
                )}
              </form>
            </div>
            

            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {content.info.title}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">{content.info.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">{content.info.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600">{content.info.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <h4 className="text-xl font-semibold mb-4">
                  {locale === 'es' ? '¿Listo para comenzar?' : 'Ready to get started?'}
                </h4>
                <p className="text-blue-100 mb-6">
                  {locale === 'es' 
                    ? 'Nuestro equipo está aquí para ayudarte a transformar tu negocio con soluciones modernas.'
                    : 'Our team is here to help you transform your business with modern solutions.'
                  }
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                  {locale === 'es' ? 'Programar Demo' : 'Schedule a Demo'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

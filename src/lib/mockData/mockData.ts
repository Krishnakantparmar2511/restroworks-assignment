import { HomepageData } from "../interface/interface";

// fallback data 
export const getFallbackData = (locale: string): HomepageData => ({
  meta: {
    title: locale === 'es' ? 'Restroworks - Transforma tu Negocio' : 'Restroworks - Transform Your Business',
    description: locale === 'es' ? 'Soluciones modernas para tu empresa' : 'Modern solutions for your business',
    keywords: locale === 'es' ? 'negocio, tecnología, innovación' : 'business, technology, innovation'
  },
  content: {
    hero: {
      title: locale === 'es' ? 'Transforma tu Negocio' : 'Transform Your Business',
      subtitle: locale === 'es' ? 'El servidor está en un servidor gratuito y se reinicia tras 1 minuto de inactividad. Inténtalo de nuevo en 2 minutos.' : 'Backend is on a free server and restarts after 1 min of inactivity. Please try again in 2 mins.',
      primaryButton: {
        text: locale === 'es' ? 'Comenzar' : 'Get Started',
        url: '#'
      },
      secondaryButton: {
        text: locale === 'es' ? 'Saber Más' : 'Learn More',
        url: '#'
      }
    },
    features: {
      heading: locale === 'es' ? '¿Por qué Elegir Restroworks?' : 'Why Choose Restroworks?',
      subtitle: locale === 'es' ? 'Descubre las características clave' : 'Discover the key features'
    },
    testimonials: {
      heading: locale === 'es' ? 'Lo que Dicen Nuestros Clientes' : 'What Our Clients Say',
      subtitle: locale === 'es' ? 'No solo tomes nuestra palabra' : 'Don\'t just take our word for it'
    },
    cta: {
      title: locale === 'es' ? '¿Listo para Transformar tu Negocio?' : 'Ready to Transform Your Business?',
      subtitle: locale === 'es' ? 'Únete a cientos de empresas' : 'Join hundreds of companies',
      primaryButton: {
        text: locale === 'es' ? 'Comenzar Hoy' : 'Get Started Today',
        url: '#'
      },
      secondaryButton: {
        text: locale === 'es' ? 'Programar Demo' : 'Schedule a Demo',
        url: '#'
      },
      features: [
        locale === 'es' ? 'Consulta gratuita' : 'Free consultation',
        locale === 'es' ? 'Prueba de 14 días' : '14-day trial',
        locale === 'es' ? 'Sin costos de configuración' : 'No setup fees',
        locale === 'es' ? 'Soporte 24/7' : '24/7 support'
      ]
    }
  }
});

// Fallback SEO data
export const getFallbackSEOData = (locale: string) => ({
  title: locale === 'es' ? 'Restroworks - Transforma tu Negocio' : 'Restroworks - Transform Your Business',
  description: locale === 'es' ? 'Soluciones modernas para tu empresa' : 'Modern solutions for your business'
});

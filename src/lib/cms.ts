import { ContactFormData, HomepageData } from "./interface/interface";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export async function getHomepageData(locale: string): Promise<HomepageData> {
  try {
    const response = await fetch(`${API_BASE_URL}/pages/${locale}/home`);
    if (!response.ok) throw new Error('Failed to fetch homepage data');
    
    const result = await response.json();
    if (result.success) {
      return result.data;
    } else {
      throw new Error(result.message || 'Failed to fetch homepage data');
    }
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    // Fallback to basic data if API fails
    return {
      meta: {
        title: locale === 'es' ? 'Restroworks - Transforma tu Negocio' : 'Restroworks - Transform Your Business',
        description: locale === 'es' ? 'El servidor está en un servidor gratuito y se reinicia tras 1 minuto de inactividad. Inténtalo de nuevo en 2 minutos.' : 'Backend is on a free server and restarts after 1 min of inactivity. Please try again in 2 mins.',
        keywords: locale === 'es' ? 'negocio, tecnología, innovación' : 'business, technology, innovation'
      },
      content: {
        hero: {
          title: locale === 'es' ? 'Transforma tu Negocio' : 'Transform Your Business',
          subtitle: locale === 'es' ? 'Soluciones modernas para tu empresa' : 'Modern solutions for your business',
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
    };
  }
}


export async function submitContact(data: ContactFormData): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit contact form');
    }
    
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Failed to submit contact form');
    }
    
    console.log('Contact form submitted successfully:', result);
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }
}


export async function getSEOData(page: string, locale: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/pages/${locale}/${page}`);
    if (!response.ok) throw new Error('Failed to fetch SEO data');
    
    const result = await response.json();
    if (result.success) {
      return {
        title: result.data.meta?.title || 'Restroworks',
        description: result.data.meta?.description || 'Modern business solutions'
      };
    } else {
      throw new Error(result.message || 'Failed to fetch SEO data');
    }
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return {
      title: 'Restroworks',
      description: 'Modern business solutions'
    };
  }
}

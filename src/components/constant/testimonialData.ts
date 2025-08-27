import { TestimonialItem } from "../../types";

export const testimonialsData = (locale: string): TestimonialItem[] => {
  return [
    {
      quote: locale === 'es' 
        ? 'Restroworks transformó completamente nuestra presencia en línea. El soporte multi-idioma y el diseño moderno nos ayudaron a llegar a una audiencia mucho más amplia. ¡Nuestras tasas de conversión aumentaron un 40% en el primer mes!'
        : 'Restroworks transformed our online presence completely. The multi-language support and modern design helped us reach a much wider audience. Our conversion rates increased by 40% within the first month!',
      author: locale === 'es' ? 'Carlos Rodríguez' : 'Priya Sharma',
      position: locale === 'es' ? 'CEO' : 'CEO',
      company: locale === 'es' ? 'TechSolutions España' : 'TechSolutions India'
    },
    {
      quote: locale === 'es'
        ? 'La velocidad y confiabilidad de Restroworks son excepcionales. Nuestro sitio web ahora carga en menos de 2 segundos y hemos visto una mejora significativa en el SEO. ¡Altamente recomendado!'
        : 'The speed and reliability of Restroworks are exceptional. Our website now loads in under 2 seconds and we\'ve seen a significant improvement in SEO. Highly recommended!',
      author: locale === 'es' ? 'María González' : 'Alex Chen',
      position: locale === 'es' ? 'Director de Marketing' : 'Marketing Director',
      company: locale === 'es' ? 'InnovateLab' : 'InnovateLab'
    },
    {
      quote: locale === 'es'
        ? 'El equipo de Restroworks entendió perfectamente nuestras necesidades empresariales. El resultado superó nuestras expectativas y el soporte post-lanzamiento ha sido excepcional.'
        : 'The Restroworks team perfectly understood our business needs. The result exceeded our expectations and the post-launch support has been exceptional.',
      author: locale === 'es' ? 'Roberto Silva' : 'Sarah Johnson',
      position: locale === 'es' ? 'Fundador' : 'Founder',
      company: locale === 'es' ? 'StartupVentures' : 'StartupVentures'
    }
  ];
}

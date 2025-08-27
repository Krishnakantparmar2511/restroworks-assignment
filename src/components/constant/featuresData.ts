export const staticFeaturesData = (locale:string)=>{return([
    {
      icon: "🚀",
      title: locale === 'es' ? "Rendimiento Ultra Rápido" : "Lightning Fast Performance",
      description: locale === 'es' ? "Construido con Next.js 14 y optimizado para velocidad, asegurando que tu sitio web cargue en milisegundos." : "Built with Next.js 14 and optimized for speed, ensuring your website loads in milliseconds."
    },
    {
      icon: "🌐",
      title: locale === 'es' ? "Soporte Multi-idioma" : "Multi-Language Support",
      description: locale === 'es' ? "Soporte completo de localización para inglés y español, con cambio de idioma fácil." : "Full localization support for English and Spanish, with easy language switching."
    },
    {
      icon: "📱",
      title: locale === 'es' ? "Diseño Responsivo" : "Responsive Design",
      description: locale === 'es' ? "Experiencia perfecta en todos los dispositivos - escritorio, tablet y móvil." : "Perfect experience across all devices - desktop, tablet, and mobile."
    },
    {
      icon: "🔒",
      title: locale === 'es' ? "Seguro y Confiable" : "Secure & Reliable",
      description: locale === 'es' ? "Seguridad de nivel empresarial con actualizaciones regulares y garantía de 99.9% de tiempo de actividad." : "Enterprise-grade security with regular updates and 99.9% uptime guarantee."
    },
    {
      icon: "⚡",
      title: locale === 'es' ? "Optimizado para SEO" : "SEO Optimized",
      description: locale === 'es' ? "Características SEO integradas incluyendo meta tags, sitemaps y optimización de rendimiento." : "Built-in SEO features including meta tags, sitemaps, and performance optimization."
    },
    {
      icon: "🎨",
      title: locale === 'es' ? "UI/UX Moderno" : "Modern UI/UX",
      description: locale === 'es' ? "Interfaces hermosas e intuitivas diseñadas con los últimos principios de diseño." : "Beautiful, intuitive interfaces designed with the latest design principles."
    }
  ])}
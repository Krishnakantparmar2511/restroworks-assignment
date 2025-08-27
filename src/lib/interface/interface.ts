
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}


export interface HomepageData {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  content: {
    hero: {
      title: string;
      subtitle: string;
      primaryButton: {
        text: string;
        url: string;
      };
      secondaryButton: {
        text: string;
        url: string;
      };
    };
    features: {
      heading: string;
      subtitle: string;
    };
    testimonials: {
      heading: string;
      subtitle: string;
    };
    cta: {
      title: string;
      subtitle: string;
      primaryButton: {
        text: string;
        url: string;
      };
      secondaryButton: {
        text: string;
        url: string;
      };
      features: string[];
    };
  };
}

import { ContactFormData, HomepageData} from "./interface/interface";
import { getFallbackData, getFallbackSEOData } from "./mockData/mockData";

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
    //  fallback data instead of api fail
    return getFallbackData(locale);
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
    // Use centralized fallback data instead of duplicating
    return getFallbackSEOData(locale);
  }
}

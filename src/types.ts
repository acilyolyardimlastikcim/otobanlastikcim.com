export interface GoogleProfile {
  id: string;
  name: string;
  category: string;
  shareUrl: string;
  rating: number;
  reviewCount: number;
  addressSummary: string;
  features: string[];
}

export interface HighwayPoint {
  id: string;
  highway: 'KMO (O-7)' | 'TEM (E-80)' | 'D-100 (E-5)' | 'Çatalca Bölgesi';
  name: string;
  avgEtaMinutes: number;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  keyPoints: string[];
  vehicleTypes: string[];
}

export interface GoogleReview {
  id: string;
  author: string;
  vehicle: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  profileSource: 'Can Oto Lastik' | 'Kurumsal Oto Lastikçi';
}

export interface FAQItem {
  question: string;
  answer: string;
}

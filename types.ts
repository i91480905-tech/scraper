
export interface Business {
  name: string;
  city: string;
  category: string;
  address?: string;
  phone?: string;
  website?: string;
  rating?: number | string;
  reviewCount?: number | string;
  operatingHours?: string;
}

export type InfoKey =
  | 'address'
  | 'phone'
  | 'website'
  | 'rating'
  | 'reviewCount'
  | 'operatingHours';

export interface Geolocation {
  latitude: number;
  longitude: number;
}
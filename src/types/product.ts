import type { Review } from './productReview';

export interface Product {
  availabilityStatus: string;
  category: string;
  description: string;
  discountPercentage: number;
  id_firestore: string;
  id: string;
  image: string;
  images: string[];
  price: number;
  quantity: number;
  rating: number;
  thumbnail: string;
  reviews: Review[];
  title: string;
}

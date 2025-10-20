export interface Product {
  id_firestore: string;
  id: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  images: string[];
  thumbnail: string;
  image: string;
}

export interface CartItem {
  id: string;
  id_firestore: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

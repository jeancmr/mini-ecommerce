export type Review = {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
};

export interface ProductReviewsProps {
  reviews: Review[];
}

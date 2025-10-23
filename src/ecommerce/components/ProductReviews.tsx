import type { ProductReviewsProps } from '../../types/productReview';
import { StarRating } from './StartRating';

export const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const today = new Date();

  const getTimeAgo = (date: string) => {
    const reviewDate = new Date(date);
    const diffTime = Math.abs(today.getTime() - reviewDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section className="max-w-4xl mx-auto mt-14">
      <h2 className="text-2xl font-bold">Product Reviews</h2>
      {reviews.map((review) => (
        <div key={review.date} className="border-b border-gray-300 p-4">
          <header className="flex items-center justify-between">
            <div>
              <strong>{review.reviewerName}</strong>
              <p className="text-sm">{getTimeAgo(review.date)} days ago</p>
            </div>
            <StarRating defaultRating={review.rating} size={24} />
          </header>
          <p>{review.comment}</p>
        </div>
      ))}
    </section>
  );
};

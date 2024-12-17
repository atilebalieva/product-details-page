import { ProductReviews } from "@/lib/infer-type";
import Stars from "./stars";

export default function ReviewsRaiting({ productReviews }: { productReviews: ProductReviews }) {
  const reviewsNum = productReviews.length;
  const reviewsRaitingArr = productReviews.map((review) => review.rating);
  const quantityOfRaitings = reviewsRaitingArr.length;
  const averageRatingProduct = reviewsRaitingArr.reduce((sum, num) => sum + num, 0) / quantityOfRaitings;

  return (
    <div className="flex items-center gap-1">
      <p className="text-sm text-neutral-950">{averageRatingProduct}</p>
      <Stars productReviews={productReviews} />
      <p className="text-indigo-700 text-xs font-medium leading-3 cursor-pointer">See all {reviewsNum} reviews</p>
    </div>
  );
}

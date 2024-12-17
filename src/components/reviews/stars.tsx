import { ProductReviews } from "@/lib/infer-type";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
const { nanoid } = require("nanoid");

export default function Stars({ productReviews }: { productReviews: ProductReviews }) {
  const reviewsRaitingArr = productReviews.map((review) => review.rating);
  const quantityOfRaitings = reviewsRaitingArr.length;
  const averageRatingProduct = reviewsRaitingArr.reduce((sum, num) => sum + num, 0) / quantityOfRaitings;

  const dynamicStar = (star: number) => {
    if (star <= Math.floor(averageRatingProduct)) return <FaStar key={nanoid()} className="text-yellow-500" />;
    else if (star === Math.ceil(averageRatingProduct) && averageRatingProduct % 1 !== 0)
      return <FaStarHalfAlt key={nanoid()} className="text-yellow-500" />;
    else {
      return <FaRegStar key={nanoid()} className="text-neutral-400" />;
    }
  };
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <div key={nanoid()}>{dynamicStar(star)}</div>
      ))}
    </div>
  );
}

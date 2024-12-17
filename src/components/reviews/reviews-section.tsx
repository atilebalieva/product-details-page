import { ProductReviews } from "@/lib/infer-type";
import Review from "./review";
import ReviewChart from "./review-chart";

export default function ReviewsSection({ productReviews }: { productReviews: ProductReviews }) {
  return (
    <section className="py-4">
      <div className="flex gap-2 lg:gap-12 justify-stretch lg:flex-row flex-col items-center">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-neutral-950">Product Reviews</h2>
          <Review productReviews={productReviews} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <ReviewChart productReviews={productReviews} />
        </div>
      </div>
    </section>
  );
}

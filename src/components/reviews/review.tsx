import { ProductReviews } from "@/lib/infer-type";
import { Card } from "../ui/card";
import { FaStar, FaRegStar } from "react-icons/fa";
import { formatDistance, subDays } from "date-fns";

const { nanoid } = require("nanoid");

export default function Review({ productReviews }: { productReviews: ProductReviews }) {
  return (
    <div className="flex flex-col gap-4 my-2">
      {productReviews.map((review) => (
        <Card key={nanoid()} className="p-4">
          <div className="flex gap-2 items-center">
            <p className="rounded-full border flex items-center justify-center font-bold w-[36px] h-[36px] bg-slate-300">
              {review.user_id.charAt(0).toUpperCase()}
            </p>
            <div>
              <p className="text-sm font-bold">{review.user_id}</p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star, i) =>
                  star <= review.rating ? (
                    <FaStar key={nanoid()} className="text-yellow-500" />
                  ) : (
                    <FaRegStar key={nanoid()} className="text-neutral-400" />
                  ),
                )}
                <p className="text-xs text-bold text-muted-foreground">
                  {formatDistance(subDays(review.created_at!, 0), new Date())}
                </p>
              </div>
            </div>
          </div>
          <p className="py-2 font-medium text-sm">{review.content}</p>
        </Card>
      ))}
    </div>
  );
}

import { Badge } from "../ui/badge";
import { Price } from "../../lib/infer-type";

export default function ProductPrice({ price }: { price: Price }) {
  if (!price) return null;

  return (
    <>
      {price.discount_percentage > 0 ? (
        <div>
          <div className="flex items-center gap-1">
            <p className="text-xl font-medium">${price.sale_price}</p>
            <span className="line-through text-neutral-400 text-sm">${price.list_price}</span>
          </div>
          <Badge className="text-xs bg-amber-50 text-amber-700 px-px" variant="outline">
            {price.discount_percentage}% OFF
          </Badge>
        </div>
      ) : (
        <p className="text-xl font-medium">${price.list_price}</p>
      )}
    </>
  );
}

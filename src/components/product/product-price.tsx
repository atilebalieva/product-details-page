import formatPrice from "../../lib/format-price";
import { Badge } from "../ui/badge";
import { Price } from "../../lib/infer-type";

export default function ProductPrice({ price }: { price: Price }) {
  if (!price) return null;

  return (
    <Badge className="text-sm" variant={"secondary"}>
      {price.discount_percentage > 0 ? (
        <>
          {formatPrice(price.sale_price)}{" "}
          <span className="line-through text-neutral-400 text-xs">{formatPrice(price.list_price)}</span>
        </>
      ) : (
        <>{formatPrice(price.list_price)}</>
      )}
    </Badge>
  );
}

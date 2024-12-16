import { useSearchParams } from "react-router-dom";
import { Price } from "../../lib/infer-type";
import ProductSizeButton from "./product-size-button";
const { nanoid } = require("nanoid");

export default function ProductSize({ inventory }: { inventory: Price[] }) {
  const [searchParams] = useSearchParams();
  const selectedColor = searchParams.get("type");

  return (
    <>
      <h2 className="text-xs text-neutral-600 mb-3">Available sizes</h2>
      <div className="flex flex-wrap gap-3">
        {inventory.map((product) =>
          product.color === selectedColor ? <ProductSizeButton size={product.size} key={nanoid()} /> : null,
        )}
      </div>
    </>
  );
}

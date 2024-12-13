import { Price } from "@/lib/infer-type";
import { Button } from "../ui/button";
import ProductSizeButton from "./prosuct-size-button";
const { nanoid } = require("nanoid");

export default function ProductSize({ inventory }: { inventory: Price[] }) {
  return (
    <>
      <h2 className="text-xs text-neutral-600 mb-3">Available sizes</h2>
      <div className="flex flex-wrap gap-3">
        {inventory.map((product) => (
          <ProductSizeButton size={product.size} key={nanoid()} />
        ))}
      </div>
    </>
  );
}

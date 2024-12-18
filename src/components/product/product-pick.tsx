import { Price } from "@/lib/infer-type";
import ProductColors from "./product-colors";
const { nanoid } = require("nanoid");

export default function ProductPick({ productInventory }: { productInventory: Price[] }) {
  const uniqueColor = Array.from(new Set(productInventory.map((variant: Price) => variant.color)));

  return (
    <div className="flex gap-2">
      {uniqueColor.length > 1 ? (
        uniqueColor.map((item, index) => (
          <ProductColors type={uniqueColor[index]} color={uniqueColor[index]} key={nanoid()} />
        ))
      ) : (
        <ProductColors type={productInventory[0].color} color={productInventory[0].color} />
      )}
    </div>
  );
}

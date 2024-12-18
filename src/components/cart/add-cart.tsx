import { Product, SingleImageUrl, Price } from "../../lib/infer-type";
import { useCartStore } from "../../lib/client-store";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function AddCart({ productInventory }: { productInventory: Price }) {
  const { cart, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const [searchParams] = useSearchParams();

  const selectedColor = searchParams.get("type");
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const image_url = searchParams.get("image");
  const size = searchParams.get("size");
  const price = parseFloat(searchParams.get("price")!);

  console.log("CART", cart);

  /*   if (!id || !title || image_url || !selectedColor) {
    console.log("ERROR: PRODUCT NOT FOUND");
  } */

  return (
    <>
      <div className="flex rounded my-4 bg-gray-300 border w-36 mb-6">
        <Button
          variant="secondary"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          <Minus size={1} />
        </Button>
        <Button variant="secondary" className="flex-1 text-neutral-600 text-xs">
          {quantity}
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          <Plus size={1} />
        </Button>
      </div>
      <Button
        className="bg-indigo-700 rounded-sm w-full"
        onClick={() =>
          addToCart({
            product_id: id,
            productName: title,
            color: selectedColor,
            quantity: quantity,
            img: image_url,
            price: price,
            size: productInventory?.size,
          })
        }
      >
        Add to Cart
      </Button>
    </>
  );
}

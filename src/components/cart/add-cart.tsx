import { ProductDetailsType, SingleImageUrl, Price } from "../../lib/infer-type";
import { useCartStore } from "../../lib/client-store";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function AddCart({
  productName,
  productImg,
  productInventory,
}: {
  productName: ProductDetailsType;
  productImg: SingleImageUrl;
  productInventory: Price;
}) {
  const { cart, addToCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  console.log(productName, productImg, productInventory);
  console.log("CART", cart);

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
            product_id: productName.product_id,
            productName: productName.name,
            color: productInventory.color,
            quantity: quantity,
            img: productImg.image_url,
            price: productInventory.list_price,
            size: productInventory?.size,
          })
        }
      >
        Add to Cart
      </Button>
    </>
  );
}

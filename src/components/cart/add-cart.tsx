"use client";

import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AddCart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex rounded my-4 bg-gray-300 border w-36 mb-6">
        <Button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
          variant={"secondary"}
        >
          <Minus size={1} />
        </Button>
        <Button variant={"secondary"} className="flex-1 text-neutral-600 text-xs">
          {quantity}
        </Button>
        <Button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          variant={"secondary"}
        >
          <Plus size={1} />
        </Button>
      </div>
      <Button className="bg-indigo-700 rounded-sm w-full">Add to Cart</Button>
    </>
  );
}

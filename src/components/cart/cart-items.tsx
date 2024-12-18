import { useCartStore } from "@/lib/client-store";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useMemo } from "react";

export default function CartItems() {
  const { cart } = useCartStore();

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      return acc + item.price! * item.quantity;
    }, 0);
  }, [cart]);

  return <div></div>;
}

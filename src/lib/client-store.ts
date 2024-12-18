import { create } from "zustand";

export type CartItem = {
  product_id: string | null;
  productName: string | null;
  color: string | null;
  quantity: number;
  img: string | null;
  price: number;
  size?: string | null;
};

export type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.product_id === item.product_id && cartItem.color === item.color,
      );
      if (existingItem) {
        const updatedCart = state.cart.map((cartItem) => {
          if (cartItem.product_id === item.product_id && cartItem.color === item.color) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        });
        return { cart: updatedCart };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              ...item,
              quantity: item.quantity,
            },
          ],
        };
      }
    }),
  removeFromCart: (item) =>
    set((state) => {
      const updatedCart = state.cart
        .map((cartItem) => {
          if (cartItem.product_id === item.product_id && cartItem.color === item.color) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
      return { cart: updatedCart };
    }),
}));

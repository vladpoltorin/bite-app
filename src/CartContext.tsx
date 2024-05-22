import { createContext } from "react";
import { CartItem, Product, QuantityAction } from "./types";

type CartContext = {
  items: CartItem[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (itemId: string) => void;
  changeQuantity: (itemId: string, action: QuantityAction) => void;
  cartTotal: number;
};

export const CartContext = createContext<CartContext>({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  changeQuantity: () => {},
  cartTotal: 0,
});
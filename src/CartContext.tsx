import { createContext } from "react";
import { CartItem, Product, QuantityAction } from "./types";

type CartContext = {
  items: CartItem[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: string) => void;
  changeQuantity: (index: number, action: QuantityAction) => void;
};

export const CartContext = createContext<CartContext>({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  changeQuantity: () => {},
});
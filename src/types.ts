export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type CartItem = {
  product: Product,
  itemId: string;
  quantity: number,
};

export type QuantityAction = 'increment' | 'decrement';

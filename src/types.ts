export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type CartItem = {
  product: Product,
  quantity: number,
};

export type QuantityAction = 'increment' | 'decrement';

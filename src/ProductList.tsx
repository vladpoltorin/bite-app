import type { Product } from './types';
import products from './data.json';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
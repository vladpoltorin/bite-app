import { HStack } from '@chakra-ui/react';
import type { Product } from './types';
import products from './data.json';
import { ProductCard } from './ProductCard';


export const ProductList = () => {
  return (
    <HStack wrap="wrap" gap={5} alignItems="stretch">
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </HStack>
  );
};
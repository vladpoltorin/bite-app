import { useContext } from 'react';
import { HStack } from '@chakra-ui/react';
import { CartContext } from '../CartContext';

import type { Product } from '../types';
import products from '../data.json';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <HStack wrap="wrap" gap={5} alignItems="stretch">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} onAddProduct={addItemToCart} />
      ))}
    </HStack>
  );
};
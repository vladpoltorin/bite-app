import type { Product } from './types';

export const ProductCard = ({ id, price, name, description, imageUrl }: Product) => {
  return (
    <div>
      <img src={imageUrl} alt={`${name} product card`} width={200} height={150} />
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
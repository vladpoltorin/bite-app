import { Heading, HStack} from '@chakra-ui/react';
import { useContext } from 'react';
import { Cart } from './Cart'; 
import { CartContext } from '../CartContext';

export const Header = () => {
  const { items } = useContext(CartContext);

  console.log(items, 12312)

  return (
    <HStack w="full" h="50px" justify="space-between" bgColor="orange.100" px="5">
      <Heading as="h1" size="md">Bite App</Heading>
      <Cart />
    </HStack>
  );
};
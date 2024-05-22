import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  VStack,
  HStack,
  Box,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useContext } from 'react';

import { CartContext } from '../CartContext';


export const Cart = () => {
  const { items, removeItemFromCart, changeQuantity } = useContext(CartContext);

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="unstyled">View Cart</Button>
      </PopoverTrigger>
      <PopoverContent w="500px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Current Order</PopoverHeader>
        <PopoverBody>
          <VStack align="flex-start" divider={<Divider />} gap="2">
            {items.map((item, index) => {
              const { product, quantity } = item;

              return (
                <HStack justifyContent="space-between" w="full" align="center" key={item.product.id}>
                  <Box flexGrow={1}>
                    <p>{product.name}</p>
                    <p>Quanity: {quantity}</p>
                  </Box>
                  <Flex gap={2}>
                    <Button onClick={() => changeQuantity(index, 'increment')}>+</Button>
                    <Button onClick={() => changeQuantity(index, 'decrement')}>-</Button>
                    <Button onClick={() => removeItemFromCart(product.id)}>Remove</Button>
                  </Flex>
                </HStack>
              );
            })}
          </VStack>

          <VStack align="flex-start" mt="10">
            <Text fontWeight={700}>Total: 123</Text>
            <Button w="full" bg="green.200" onClick={() => alert('Confirmed')}>Complete Order</Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
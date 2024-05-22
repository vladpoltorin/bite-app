import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import { CartContext } from './CartContext';
import { ProductList } from './components/ProductList';
import type { Product, CartItem, QuantityAction } from './types';
import { Header } from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = (product: Product) => {
    setCartItems(prevItems => [...prevItems, { product, itemId: uuid(), quantity: 1 }]);
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prevCartItems => prevCartItems.filter((cartItem) => cartItem.itemId !== itemId));
  };

  const handleChangeQuantity = (itemId: string, action: QuantityAction) => {
    const cartItem = cartItems.find(cartItem => cartItem.itemId === itemId);

    if (action === 'decrement') {
      if (cartItem?.quantity === 1) {
        setCartItems(prev => prev.filter((item) => item.itemId !== itemId));
      } else {
        setCartItems(items => items.map(item => {
          if (item.itemId === itemId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }

          return item;
        }));
      }
    }

    if (action === 'increment') {
      setCartItems(items => items.map(item => {
        if (item.itemId === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item;
      }));
    }
  };

  return (
    <main>
      <CartContext.Provider
        value={{
          items: cartItems,
          addItemToCart: handleAddItem,
          removeItemFromCart: handleRemoveItem,
          changeQuantity: handleChangeQuantity
        }}>
        <Header />
        <Container maxW='1280px' centerContent>
          <ProductList />
        </Container>
      </CartContext.Provider>
    </main>
  )
}

export default App

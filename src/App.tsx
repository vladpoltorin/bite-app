import { useState } from 'react';
import { Container } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import { CartContext } from './CartContext';
import { ProductList } from './components/ProductList';
import type { Product, CartItem, QuantityAction } from './types';
import { Header } from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddItem = (product: Product) => {
    setCartItems(prevItems => [...prevItems, { product, itemId: uuid(), quantity: 1 }]);
    setCartTotal(prevTotal => prevTotal + (product.price / 100));
  };

  const handleRemoveItem = (itemId: string) => {
    const cartItem = cartItems.find(cartItem => cartItem.itemId === itemId);

    setCartItems(prevCartItems => prevCartItems.filter((cartItem) => cartItem.itemId !== itemId));
    setCartTotal(prevTotal => prevTotal - (cartItem?.product.price ?? 0) * (cartItem?.quantity ?? 1) / 100);
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

      setCartTotal(prevTotal => prevTotal - ((cartItem?.product.price ?? 0) / 100));
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
      setCartTotal(prevTotal => prevTotal + ((cartItem?.product.price ?? 0) / 100));
    }
  };

  return (
    <main>
      <CartContext.Provider
        value={{
          items: cartItems,
          addItemToCart: handleAddItem,
          removeItemFromCart: handleRemoveItem,
          changeQuantity: handleChangeQuantity,
          cartTotal,
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

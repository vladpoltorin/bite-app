import { useState } from 'react';
import { Container } from '@chakra-ui/react';

import { CartContext } from './CartContext';
import { ProductList } from './ProductList';
import type { Product, CartItem, QuantityAction } from './types';
import { Header} from './Header';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = (product: Product) => {
    const sameProduct = cartItems.find(cartItem => cartItem.product.id === product.id);

    if (!sameProduct) {
      setCartItems(prevItems => [...prevItems, { product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevCartItems => prevCartItems.filter((cartItem) => cartItem.product.id === id));
  };

  const handleChangeQuantity = (index: number, action: QuantityAction) => {
    const cartItem = cartItems[index];

    if (action === 'decrement') {
      if (cartItem.quantity === 1) {
        setCartItems(prev => prev.filter(item => item.product.id === cartItem.product.id ));
      } else {
        const items = [...cartItems];
        items[index].quantity -= 1;
        setCartItems(items);
      }
    }

    if (action === 'increment') {
      const items = [...cartItems];
      items[index].quantity += 1;
      setCartItems(items);
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

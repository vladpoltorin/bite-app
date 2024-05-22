import { useState } from 'react';
import { Container } from '@chakra-ui/react';

import { CartContext } from './CartContext';
import { ProductList } from './components/ProductList';
import type { Product, CartItem, QuantityAction } from './types';
import { Header} from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddItem = (product: Product) => {
    setCartItems(prevItems => [...prevItems, { product, quantity: 1 }]);
  };

  const handleRemoveItem = (id: string) => {
    console.log(id, 123, cartItems)
    setCartItems(prevCartItems => prevCartItems.filter((cartItem) => cartItem.product.id !== id));
  };

  const handleChangeQuantity = (index: number, action: QuantityAction) => {
    const cartItem = cartItems[index];

    if (action === 'decrement') {
      if (cartItem.quantity === 1) {
        setCartItems(prev => prev.filter((_, i) => i !== index ));
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

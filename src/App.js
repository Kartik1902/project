import React,{ useState } from 'react';

import Header from "./components/Layout/Header"
import Item from './components/Items/Item';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Item />
      </main>
    </CartProvider>
  );
}

export default App;

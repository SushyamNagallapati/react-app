// Sharing State Between Components

// We are implementing an E-Commerce example, where total no. of items are shown in NavBar and shows the item in the shopping Cart.
// We also set a button to clear items in the cart.

import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;

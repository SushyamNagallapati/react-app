// Updating State

// Exercise 3: Updating the array of objects
// Eg. Adding quantities

import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ), // Solution
    });
  };

  return (
    <div>
      <p>Discount: {cart.discount}</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - Qty: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

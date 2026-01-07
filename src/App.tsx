// Updating State

// Exercise 2: Updating the array

import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Tandoori",
    toppings: ["Chicken"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] }); // Solution
  };

  return (
    <>
      <div>
        <div>{pizza.name}</div>
        {pizza.toppings}
        <div>
          <button onClick={handleClick}>Click to add Toppings</button>
        </div>
      </div>
    </>
  );
}

export default App;

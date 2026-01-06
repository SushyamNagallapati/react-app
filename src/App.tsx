// Updating Objects

// It's better to group related state variables inside an object.
// When working with objects and arrays, we need to treat them as immutable or read only.

import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 }); // copying all the drink objects in the new object using the spread operator.
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

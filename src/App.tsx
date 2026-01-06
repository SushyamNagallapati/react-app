// Understanding State Hook

// 1. React updates state asynchronously.
// 2. State is stored outside of components.
// 3. Use hooks at the top level of component.

import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(false);
  let count = 0;

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;

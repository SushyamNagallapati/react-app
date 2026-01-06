// Choosing  the State Structure

// Best Practices
// 1. Avoid redundant state variables.
// 2. Group related variables inside an object.
// 3. Avoid deeply nested structures.

import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    // Avoid these type of deeply nested structure, prefer flat structure
    firstName: "",
    lastName: "",
    contact: {
      address: {
        street: "",
      },
    },
  });
  const [isLoading, setLoading] = useState(false);
  return <div></div>;
}

export default App;

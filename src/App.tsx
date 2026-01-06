// Updating Nested Objects

import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "Chennai",
      zipcode: 6000107,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 6000108 },
    });
  };
  // in the above object, first we are copying all the properties from the customer object,
  // and we setting the new address object, which is completely independent of the old address object.
  // Inside the new address object, we are calling customer address properties (by spread operator) and then we are changing the value of zipcode property.

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

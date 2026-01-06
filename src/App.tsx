// Keeping Componets Pure
// Given the same input, always returns the same result.

// To keep components pure, keep changes out of the render phase.

import Message from "./components/Message";

function App() {
  return (
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;

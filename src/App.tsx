// Updating State

// Exercise 1: Updating the player name

import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Sai",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Sushyam" } }); // Solution
  };

  return (
    <>
      <div>
        {game.id}
        {game.player.name}
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}

export default App;

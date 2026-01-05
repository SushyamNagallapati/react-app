import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Chennai", "Bengalore", "Hyderbad"];

  return (
    <div>
      <ListGroup heading="Cities" items={items} onSelectItem={() => items} />
    </div>
  );
}

export default App;

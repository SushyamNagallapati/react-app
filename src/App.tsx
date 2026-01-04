import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Chennai", "Banglore", "Kerala", "Hyderbad", "Tirupati"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;

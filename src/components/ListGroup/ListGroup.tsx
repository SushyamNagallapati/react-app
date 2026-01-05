import { useState } from "react";
import styles from "./ListGroup.module.css"; // After styling the component in a css file, we need to import it here on top.

// Passing Data via Props - Using Props we can pass data to our components
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;

  // Passing function via Props
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook - we used state hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // with this state hook, we can tell react that this component can have data or state, that will vhange over time.

  // to add multiple classes in styling our list items, we need to wrap it in an array
  // and we need to use join method on the array, and join all using a space
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found!</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

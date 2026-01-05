import { useState } from "react";
import styles from "./ListGroup.css"; // After styling the component in a css file, we need to import it here on top.
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

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
  const [selectedIndex, setSelectedIndex] = useState(0); // with this state hook, we can tell react that this component can have data or state, that will vhange over time.

  // to add multiple classes in styling our list items, we need to wrap it in an array
  // and we need to use join method on the array, and join all using a space
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found!</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;

import React from "react";

interface Props {
  cartItemsCount: number; // to show the total number of items
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;

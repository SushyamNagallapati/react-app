// Exercise Button

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secodary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"; // To make a property optional, we need to add a question mark "?"
  onClick: () => void;
}

const Button = ({ children, onClick, color = "warning" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

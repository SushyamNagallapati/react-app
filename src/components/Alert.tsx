// Passing Children
// We created a component that can accept children
// Using a children prop, we can pass children to a component

import { ReactNode } from "react";

interface Props {
  children: ReactNode; // Using ReactNode we can pass html content
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

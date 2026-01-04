// Passing Children
// We created a component that can accept children
// Using a children prop, we can pass children to a component

import { ReactNode } from "react";

// To show an Alert
interface Props {
  children: ReactNode; // Using ReactNode we can pass html content
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

import styles from "./Button.module.css";

interface Props {
  children: string;
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

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

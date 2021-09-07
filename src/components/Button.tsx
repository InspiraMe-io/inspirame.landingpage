import { ButtonHTMLAttributes } from "react";
import styles from "../styles/components/Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  text: string;
}

export function Button({ text, color, ...props }: ButtonProps) {
  return (
    <button
      className={styles.containerButton}
      style={{
        backgroundColor: color || "#56af89",
        color: color ? "#56af89" : "#fff",
      }}
      {...props}
    >
      {text}
    </button>
  );
}

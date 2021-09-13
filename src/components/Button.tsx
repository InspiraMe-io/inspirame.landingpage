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
          backgroundColor: color || "#2d374d",
          color: color ? "#2d374d" : "#fff",
        }}
        onClick={()=> window.open("https://forms.gle/y3reehmjMBphZiA1A", "_blank")}
        {...props}
      >
        {text}
      </button>
  );
}

import { useRef } from "react";
import styles from "../styles/components/Header.module.scss";
import { Button } from "./Button";

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.headerContainer}>
      <div>
        <p>
          {"<"}inspirame{"/>"}
        </p>
      </div>
      <div>
        <ul className={styles.navItems}>
          <li className={styles.items}>
            <a onClick={() => scrollTo("team")}>Time</a>
          </li>
          <li className={styles.items}>
            <a onClick={() => scrollTo("mission")}>Nossa missão</a>
          </li>
          <li className={styles.items}>
            <a onClick={() => scrollTo("howItWorks")}>Como funciona?</a>
          </li>
          <li style={{ width: "180px" }}>
            <a href="https://forms.gle/y3reehmjMBphZiA1A">
              <Button text="Começar"/>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

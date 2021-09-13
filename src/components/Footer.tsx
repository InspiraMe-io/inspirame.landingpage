import { useRef } from "react";
import styles from "../styles/components/Footer.module.scss";
import { Button } from "./Button";

export default function Footer() {
  // const scrollTo = (id: string) => {
  //     const element = document.getElementById(id) as HTMLDivElement;
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Quem somos</h1>
          <p>
            Pessoas movidas por desafios com o objetivo de impactar postivamente
            o Brasil.
          </p>
        </div>
        <div className={styles.card}>
          <h1>Sobre</h1>
          <p>
            <a href="#">Como funciona?</a>
            <a href="#">Privacidade</a>
            <a href="#">Termos de uso</a>
          </p>
        </div>
        <div className={styles.card}>
          <h1>Contatos</h1>
          <p>
            <a href="https://www.instagram.com/weareinspirame/">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:inspirame.plataform@gmail.com">Email</a>
          </p>
        </div>
      </div>
      <hr className={styles.hr}></hr>
      {/* <p>
        <a>Made with ❤️ in Brazil | InspiraMe &copy; 2021</a>
      </p> */}
    </footer>
  );
}

import { Slide } from "react-awesome-reveal";
import styles from "../styles/components/TeamSection.module.scss";
import { Button } from "./Button";

// interface MiddleBlockProps {
//     title: string;
//     content: string;
//     button: string;
// }

export default function TeamSection() {
  const people = [
    {
      name: "Ana Beatriz",
      description: "Business",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "ana.jpg",
    },
    {
      name: "Enzo Portela",
      description: "Business & Tech",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "enzo.jpg",
    },
    {
      name: "Julia Zibordi",
      description: "Tech",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "julia.jpg",
    },
    {
      name: "Guilherme Dantas",
      description: "Marketing",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "guilherme.jpg",
    },
  ];
  return (
    <section className={styles.teamSection}>
      <Slide direction="right">
        <div className={styles.teamSectionContainer}>
          <h1>Time</h1>
          <div className={styles.cardsContainer}>
            {people.map((item) => {
              return (
                <div className={styles.card}>
                  <div className={styles.profile}>
                    <img
                      src={`/img/profile/${item.image}`}
                      alt="People"
                      width={100}
                      height={100}
                    />
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                  </div>
                  <p>
                    kkfkgkfogko kkfkgkfogko kkfkgkfogko kkfkgkfogko kkfkgkfogko
                    kkfkgkfogko
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Slide>
    </section>
  );
}

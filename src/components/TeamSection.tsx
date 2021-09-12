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
      name: "Guilherme Dantas",
      description: "Marketing",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "guilherme.jpg",
    },
    {
      name: "Julia Zibordi",
      description: "Tech",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "julia.jpg",
    },
  ];
  return (
    <section className={styles.teamSection}>
      <Slide direction="right">
        <div className={styles.teamSectionContainer}>
          <h1>Fundadores</h1>
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
                  <hr />
                  <div className={styles.socialContainer}>
                      <div className={styles.icon}>
                          <div></div>
                      </div>
                    {/* <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <div className={styles.socialIcons}></div>
                    </ul> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Slide>
    </section>
  );
}

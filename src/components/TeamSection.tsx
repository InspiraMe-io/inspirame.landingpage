import { Slide } from "react-awesome-reveal";
import styles from "../styles/components/TeamSection.module.scss";

export default function TeamSection() {
  const people = [
    {
      name: "Ana Beatriz",
      description: "Business",
      socialNetwork: "https://www.linkedin.com/in/ana-beatriz-rodrigues-5517961a8/",
      image: "ana.jpg",
      email: "",
    },
    {
      name: "Enzo Portela",
      description: "Business & Tech",
      socialNetwork: "https://www.linkedin.com/in/enzoportela",
      image: "enzo.jpg",
      email: "",
    },
    {
      name: "Guilherme Dantas",
      description: "Marketing",
      socialNetwork: "https://www.linkedin.com/in/guilherme28",
      image: "guilherme.jpg",
      email: "",
    },
    {
      name: "Julia Zibordi",
      description: "Business & Design",
      socialNetwork: "https://www.linkedin.com/in/julia-g-zibordi-6a2420220/",
      image: "julia.jpg",
      email: "",
    },
  ];
  return (
    <section className={styles.teamSection}>
      <Slide direction="right">
        <div className={styles.teamSectionContainer}>
          <h1>Fundadores</h1>
          <div className={styles.cardsContainer} id="team">
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
                    <a href={item.socialNetwork}>
                      <img
                        src={"/img/svg/linkedin.svg"}
                        width={30}
                        height={30}
                      />
                    </a>
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

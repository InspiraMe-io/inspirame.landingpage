import { Slide } from "react-awesome-reveal";
import teamContent from "../content/TeamContent.json";
import styles from "../styles/components/TeamSection.module.scss";

export default function TeamSection() {
  const people = teamContent;
  
  return (
    <section className={styles.teamSection}>
      <Slide direction="right">
        <div className={styles.teamSectionContainer}>
          <h1>Fundadores</h1>
          <div className={styles.cardsContainer} id="team">
            {people.map((item) => {
              return (
                <div className={styles.card} key={item.id}>
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

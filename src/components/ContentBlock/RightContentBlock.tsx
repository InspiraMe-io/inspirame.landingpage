import { ContentBlockProps } from "./types";
import styles from '../../styles/components/ContentBlock/RightContentBlock.module.scss';
import Image from 'next/image';
import { Button } from "../Button";
import { Fade } from "react-awesome-reveal";

export default function RightContentBlock({
    title,
    icon,
    content,
    button,
    id
}: ContentBlockProps) {

    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
      };    

    return (
        <section className={styles.rightContentSection} >
            <Fade direction="right">
                <div className={styles.container} id={id}>
                    <div className={styles.leftSide}>
                        <h2 className={styles.title}>{title}</h2>
                        <p>{content}</p>
                        <div className={styles.buttonWrapper}>
                            {typeof button === "object" &&
                            button.map((item: any, id: number) => {
                                return (
                                <Button
                                    key={id}
                                    color={item.color}
                                    // fixedWidth={true}
                                    text={item.title}
                                    onClick={() =>  item.to ? scrollTo(item.to) : null}
                                />
                                );
                            })}
                        </div>

                    </div>
                        
                    <Image src={`/img/svg/${icon}`}color="red" alt='' width="500px" height="500px"/>
                </div>
            </Fade>
            
        </section>
    )
}
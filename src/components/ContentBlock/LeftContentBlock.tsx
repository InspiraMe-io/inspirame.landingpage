import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/components/ContentBlock/LeftContentBlock.module.scss';
import { ContentBlockProps } from './types';

import Image from 'next/image';

export default function LeftContentBlock({ 
    title,
    icon,
    content,
    button,
    section,
    id
}: ContentBlockProps) {
    return (
        <section className={styles.leftContentSection}>
            <Fade direction="left">
                <div className={styles.container} id={id}>
                    <div className={styles.left}>
                        <Image src={`/img/svg/${icon}`} color="red" alt='' width="500px" height="500px"/>
                    </div>
                
                    <div className={styles.right}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <div className={styles.serviceWrapper}>
                        {typeof section === "object" &&
                            section.map((item: any, id: number) => {
                            return (
                                <div key={id}>
                                    <Image src={`/img/svg/${item.icon}`}  width="60px" height="60px"/>

                                    <p>Why lorem ipsun?</p>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            );
                            })}
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
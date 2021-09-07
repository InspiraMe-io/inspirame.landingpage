import { Slide } from 'react-awesome-reveal';
import styles from '../styles/components/MiddleBlock.module.scss';
import { Button } from './Button';

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
}

export default function MiddleBlock({ title, content, button }: MiddleBlockProps) {
    return (
        <section className={styles.middleBlockSection}>
            <Slide direction="up" >
                <div className={styles.middleBlockContainer}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>

                    <p className={styles.content}>
                        {content}
                    </p>

                    <Button text={button} />
                </div>
            </Slide>
            
        </section>
    )
}
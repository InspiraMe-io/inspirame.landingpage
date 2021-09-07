import styles from '../styles/components/Block.module.scss';

export default function Block({ title, content }) {
    return (
        <div className={styles.blockContainer}>
            <h2>{title}</h2>
            <div className={styles.textContainer}>
                <p className={styles.textContent}>
                    {content}
                </p>
            </div>
        </div>
    )
}
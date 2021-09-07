import styles from '../styles/components/Button.module.scss';

interface ButtonProps {
    color?: string,
    text: string
}

export function Button({ text }: ButtonProps) {
    return (
        <a className={styles.containerButton}>
            {text}
        </a>
    )
}

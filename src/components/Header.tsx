import styles from '../styles/components/Header.module.scss'
import { Button } from './Button'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div>
                {/* Logo here */}
                <div className={styles.logo} >
                    Logo
                </div>
            </div>
            <div>
                <ul>
                    <li><a>About</a></li>
                    <li><a>Mission</a></li>
                    <li><a>Product</a></li>
                    <li><Button text="Contact" /></li>
                </ul>
            </div>
        </header>
    )
}
import { useRef } from 'react'
import styles from '../styles/components/Header.module.scss'
import { Button } from './Button'

export default function Header() {

    return (
        <header className={styles.headerContainer}>
            <div>
                <div className={styles.logo} >
                    Logo
                </div>
            </div>
            <div>
                <ul className={styles.navItems}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Product</a></li>
                    <li><Button text="Contact" /></li>
                </ul>
            </div>
        </header>
    )
}
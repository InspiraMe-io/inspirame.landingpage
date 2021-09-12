import { useRef } from 'react'
import styles from '../styles/components/Header.module.scss'
import { Button } from './Button'

export default function Header() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
      };    
    
    return (
        <header className={styles.headerContainer}>
            <div>
                <p>{"<"}inspirame{"/>"}</p>
            </div>
            <div>
                <ul className={styles.navItems}>
                    <li className={styles.items}><a onClick={() => scrollTo("about")}>Sobre nós</a></li>
                    <li className={styles.items}><a onClick={() => scrollTo("mission")}>Nossa missão</a></li>
                    <li className={styles.items}><a href="#">Produto</a></li>
                    <li  style={{ width: '180px'}}>
                        <Button text="Contato" onClick={() => scrollTo("contact")} />
                    </li>
                </ul>
            </div>
        </header>
    )
}
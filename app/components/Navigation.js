'use client';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css'
import { usePathname } from 'next/navigation';
import NavLink from './navlink';

// Komponent nawigacji, który przyjmuje listę linków jako props
export default function Navigation() {
    const path = usePathname();
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src={logoImg.src} alt="A plate with food on it" />
                NextLevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/meals/share">Share Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                    <li>
                        <NavLink href="/meals/">Dynamic</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

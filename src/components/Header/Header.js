import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  function handleLogoClick() {
    router.push('/');
  }

  return (
    <header className={styles.header}>
      <img
        onClick={handleLogoClick}
        className={styles.logo}
        src="https://capp.nicepage.com/2283ddb46f95b85bcf751635c7c78a8b8cc2ce4c/images/default-logo.png"
        alt="LOGO"
      />
      <ul className={styles.navigation}>
        <li>
          <Link href="/register">Registracija</Link>
        </li>
        <li>
          <Link href="/login">Prisijungti</Link>
        </li>
      </ul>
    </header>
  );
}

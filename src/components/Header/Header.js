import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="https://capp.nicepage.com/2283ddb46f95b85bcf751635c7c78a8b8cc2ce4c/images/default-logo.png" alt="LOGO" />
      <ul className={styles.navigation}>
        <li>
          <a href="">Registruotis</a>
        </li>
        <li>
          <a href="">Prisijungti</a>
        </li>
      </ul>
    </header>
  );
}

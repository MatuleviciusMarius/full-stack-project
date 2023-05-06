import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer({ forceBottom }) {
  return (
    <div className={forceBottom ? styles['position-bottom'] : ''}>
      <footer className={styles.footer}>
        <ul>
          <li>Kontaktai</li>
          <li>Kontaktai</li>
        </ul>
        <div>
          <ul className={styles['flex-container']}>
            <li>
              <Link href={'#'}>Taisyklės</Link>
            </li>
            <li>
              <Link href={'#'}>Privatumo Politika</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

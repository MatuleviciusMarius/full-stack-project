import React from 'react';
import styles from './AdminAside.module.css';

export default function AdminAside({ setDisplayState }) {
  return (
    <aside className={styles.aside}>
      <ul>
        <li onClick={() => setDisplayState('people')}>Valdyti Zmones</li>
        <li onClick={() => setDisplayState('groups')}>Valdyti Grupes</li>
      </ul>
    </aside>
  );
}
